// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(25.042108, 121.535401), // NTUT

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#f5f5f5"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#0a0a0a"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#030303"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#c2c2c2"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#302f2f"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#5f5f5f"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#040404"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#8fb98f"},{"lightness":17}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('googlemap');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var contentString = '<div style="color:#000;">' +
                        '<p>2016 北科資工營-新世紀福爾摩資</p>' +
                        '<p>國立臺北科技大學 資訊工程系</p>' +
                        '<p>地址：台北市大安區忠孝東路三段1號</p>' +
                        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(25.042108, 121.535401),
        animation: google.maps.Animation.DROP,
        map: map,
        title: '2016 北科資工營-新世紀福爾摩資'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
    });
}
