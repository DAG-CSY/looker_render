function renderBatteryTable(data) {
  const container = document.getElementById('table-container');

  if (container) {
    // Create a table element
    const table = document.createElement('table');
    table.setAttribute('border', '1');
    
    // Add table headers
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Battery ID</th><th>Date</th><th>Filename</th><th>Image</th>';
    table.appendChild(headerRow);

    // Populate table rows with data
    data.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.battery_id}</td>
        <td>${row.date}</td>
        <td>${row.filename}</td>
        <td><img src="data:image/png;base64,${row.scatter_plot_img}" width="100"></td>
      `;
      table.appendChild(tr);
    });

    // Clear the container and append the table
    container.innerHTML = '';
    container.appendChild(table);
  }
}

// Example usage:
// Assuming the data passed contains fields: battery_id, date, filename, scatter_plot_img
renderBatteryTable(sampleData);  // sampleData should be passed from Looker Studio
