function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.650002,
            lng: 2.98333
        },
        scrollwheel: true,
        zoom: 15
    });
}
