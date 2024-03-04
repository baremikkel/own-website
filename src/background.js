document.addEventListener("DOMContentLoaded", function() {
    // Folder path where your images are stored
    var imagePath = "images/";

    // Function to fetch images from the specified folder
    function fetchImages(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", imagePath, true);
        xhr.onload = function() {
            if (xhr.status == 200) {
                var images = [];
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
                var files = xmlDoc.getElementsByTagName("a");
                for (var i = 0; i < files.length; i++) {
                    var file = files[i].getAttribute("href");
                    if (file.match(/\.(jpe?g|png|gif)$/)) {
                        images.push(imagePath + file);
                    }
                }
                callback(images);
            }
        };
        xhr.send();
    }

    // Function to set a random background image
    function setBackground(images) {
        var randomIndex = Math.floor(Math.random() * images.length);
        var backgroundElement = document.querySelector(".background");
        backgroundElement.style.backgroundImage = "url('" + images[randomIndex] + "')";
    }

    // Fetch images and set background
    fetchImages(function(images) {
        setBackground(images);
    });
});
