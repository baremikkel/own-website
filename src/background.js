window.onload = function() {
    // Array of image filenames
    var images = ["bg-img-1.jpg", "bg-img-2.jpg", "bg-img-3.jpg", "bg-img-4.jpg", "bg-img-5.jpg", "bg-img-6.jpg", "bg-img-7.jpg", "bg-img-8.jpg", "bg-img-9.jpg", "bg-img-10.jpg", "bg-img-11.jpg", "bg-img-12.jpg", "bg-img-13.jpg", "bg-img-14.jpg", "bg-img-15.jpg", "bg-img-16.jpg"];
    
    // Select a random image from the array
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    
    // Set the random image as the background
    var backgroundDiv = document.querySelector('.background');
    backgroundDiv.style.backgroundImage = "url('images/bg/" + randomImage + "')";
};
