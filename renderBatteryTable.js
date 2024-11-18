function drawVisualization(data) {
    const tableBody = document.getElementById('table-body');
    
    // Loop through each row of data passed from Looker Studio
    for (let row = 0; row < data.getNumberOfRows(); row++) {
        const filename = data.getValue(row, 0);  // Get the filename from the first column
        const base64Image = data.getValue(row, 1);  // Get the Base64 image from the second column
        
        // Create a new row in the table
        const tableRow = document.createElement('tr');
        
        // Create a cell for the filename
        const filenameCell = document.createElement('td');
        filenameCell.textContent = filename;
        tableRow.appendChild(filenameCell);
        
        // Create a cell for the Base64 image
        const imageCell = document.createElement('td');
        const imageElement = document.createElement('img');
        imageElement.src = base64Image;  // Set the source of the image to the Base64 string
        imageElement.alt = filename;    // Set the alt text to the filename
        imageCell.appendChild(imageElement);
        tableRow.appendChild(imageCell);
        
        // Add the row to the table body
        tableBody.appendChild(tableRow);
    }
}
