function loadFacebookFeed() {
    var accessToken = 'FB_KEY';
    var pageId = '1392316467533590';
    var url = `https://graph.facebook.com/${pageId}/posts?access_token=${accessToken}&limit=3`;
}

function loadYouTubeFeed() {
            var apiKey = 'YOUTUBE_KEY';
            var channelId = 'UCSba7ede1hIWU1YFvw23R-g';
    var url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`;  
}

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
