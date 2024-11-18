// Draw the visualization with the data passed to it
function drawVisualization(data) {
    const container = document.getElementById('visualization-container');

    // Loop through the data and render images
    data.forEach(row => {
        const imageBase64 = row[1];  // Assuming Base64 data is in the second column
        
        // Create an image element
        const imgElement = document.createElement('img');
        imgElement.src = imageBase64;  // Set the source to the Base64 string
        imgElement.alt = 'Base64 Image';
        imgElement.classList.add('visualization-image');

        // Append the image to the container
        container.appendChild(imgElement);
    });
}

// Dummy data for testing (replace with actual Looker Studio data)
const dummyData = [
    ['image1.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],  // Base64 string
    ['image2.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'],
];

// Call drawVisualization with the dummy data
drawVisualization(dummyData);
