
const images = ['beachNN.jpg', 'colombo.jpg', 'seaN.jpg', 'sigiriya.jpg']; // Array of image filenames
let currentIndex = 0; // Index of the currently displayed image

function changeBackground() {
    document.querySelector('.image_background').style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; 
    // Move to the next image
}
changeBackground();

setInterval(changeBackground, 3000);

