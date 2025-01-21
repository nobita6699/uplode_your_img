// Select DOM elements
const imageInput = document.getElementById('imageInput');
const uploadBtn = document.getElementById('uploadBtn');
const imageGallery = document.getElementById('imageGallery');

// Function to load images from localStorage
function loadImages() {
    console.log('Loading images from localStorage...');
    const savedImages = JSON.parse(localStorage.getItem('images')) || [];
    console.log('Saved Images:', savedImages);
    savedImages.forEach(src => displayImage(src));
}

// Function to display an image in the gallery
function displayImage(src) {
    const img = document.createElement('img');
    img.src = src; // Set the image source to the provided data
    imageGallery.appendChild(img);
}

// Handle file upload and save to localStorage
uploadBtn.addEventListener('click', () => {
    const file = imageInput.files[0];
    if (!file) {
        alert('Please select an image to upload!');
        console.error('No file selected!');
        return;
    }

    // Read the image file
    const reader = new FileReader();
    reader.onload = function () {
        const imageData = reader.result; // Get the base64 image data
        console.log('Image Data:', imageData);

        // Display the image
        displayImage(imageData);

        // Save to localStorage
        const savedImages = JSON.parse(localStorage.getItem('images')) || [];
        savedImages.push(imageData);
        localStorage.setItem('images', JSON.stringify(savedImages));
        console.log('Image saved to localStorage!');
    };
    reader.readAsDataURL(file); // Read the file as a base64 string
});

// Load images when the page loads
document.addEventListener('DOMContentLoaded', loadImages);
