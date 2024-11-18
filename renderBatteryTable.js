looker.plugins.visualizations.add({
  id: "image_table",
  label: "Image Table",
  options: {},
  create: function(element, config) {
    // Create a container for the table
    var table = document.createElement("table");
    table.className = "image-table";
    element.appendChild(table);
    
    // Add table header test1
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    headerRow.insertCell(0).innerHTML = "<strong>Filename</strong>";
    headerRow.insertCell(1).innerHTML = "<strong>Image</strong>";
  },

  updateAsync: function(data, element, config, queryResponse) {
    // Clear existing table rows (if any)
    var table = element.querySelector("table");
    var body = table.createTBody();
    
    // Loop through each row in the dataset
    for (var row of data) {
      var filename_object = row[queryResponse.fields.dimensions[0].name];
      var filename_text = LookerCharts.Utils.textForCell(filename_object);
      var image_object = row[queryResponse.fields.dimensions[1].name];
      var image_base64 = LookerCharts.Utils.textForCell(image_object);

      // Skip if image data is missing or invalid
      if (!image_base64 || !image_base64.startsWith("data:image")) {
        console.warn("Invalid image Base64 data for:", filename_text);
        continue;
      }

      // Create a new table row
      var tableRow = body.insertRow();

      // Add filename to the first column
      var filenameCell = tableRow.insertCell(0);
      filenameCell.innerText = filename_text;

      // Add Base64 image to the second column
      var imageCell = tableRow.insertCell(1);
      var img = document.createElement("img");
      img.src = image_base64;
      img.alt = filename_text;
      img.style.width = "100px"; // Adjust image size
      img.style.height = "auto";
      imageCell.appendChild(img);
    }
  }
});
