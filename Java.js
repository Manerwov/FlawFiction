var apiKey = 'AIzaSyCj_sp8P4BxHA3wRZ1saSmeVlnUaSDvtxo';
var channelId = 'UCflawfiction7309';
function showAllImages(button) {
    var images = button.previousElementSibling.getElementsByClassName("responsive-img hidden");
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("hidden");
    }
    button.style.display = "none";
}

function toggleEvent(element) {
    var galleryContainer = element.nextElementSibling;
    var button = galleryContainer.nextElementSibling;
    var images = galleryContainer.getElementsByClassName("responsive-img");

    for (var i = 0; i < images.length; i++) {
        // Only toggle hidden class for images beyond the first 3
        if (i >= 3) {
            images[i].classList.toggle("hidden");
        }
    }

    button.classList.toggle("hidden");
}
