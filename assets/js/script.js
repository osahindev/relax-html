$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:false
            }
        }
    });
    /*
        Mobile menü
    */
    $(".mobile-menu .toggle-menu").on("click", function(){
        $(".mobile-menu .overlay.left_slide, .mobile-menu .overlay.right_slide").css("width","100%");
        $(".mobile-menu .overlay.top_slide, .mobile-menu .overlay.bottom_slide").css("height","100%");
    });
    $(".mobile-menu .close-button").on("click", function(){
        $(".mobile-menu .overlay.left_slide, .mobile-menu .overlay.right_slide").css("width","0");
        $(".mobile-menu .overlay.top_slide, .mobile-menu .overlay.bottom_slide").css("height","0");
    });
    
    /* ==========================================================================
    Map
    ========================================================================== */
    if (jQuery('.google-map').length) {

        map_Lat_lng = new google.maps.LatLng(47.605798, -122.325258);
        map_style = [
            {
                "featureType": "landscape",
                "stylers": [
                    {"saturation": -100},
                    {"lightness": 65},
                    {"visibility": "on"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"saturation": -100},
                    {"lightness": 51},
                    {"visibility": "simplified"}
                ]
            }, {
                "featureType": "road.highway",
                "stylers": [
                    {"saturation": -100},
                    {"visibility": "simplified"}
                ]
            }, {
                "featureType": "road.arterial",
                "stylers": [
                    {"saturation": -100},
                    {"lightness": 30},
                    {"visibility": "on"}
                ]
            }, {
                "featureType": "road.local",
                "stylers": [
                    {"saturation": -100},
                    {"lightness": 40},
                    {"visibility": "on"}
                ]
            }, {
                "featureType": "transit",
                "stylers": [
                    {"saturation": -100},
                    {"visibility": "simplified"}
                ]
            }, {
                "featureType": "administrative.province",
                "stylers": [
                    {"visibility": "off"}
                ]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {"visibility": "on"},
                    {"lightness": -25},
                    {"saturation": -100}
                ]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {"hue": "#ffff00"},
                    {"lightness": -25},
                    {"saturation": -97}
                ]
            }
        ];
        
        map_options = {
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeControl: true,
            center: map_Lat_lng
        };
        map_element = document.getElementById('google-map');
        google_map = new google.maps.Map(map_element, map_options);
        map_marker_image = 'assets/img/marker.png';
        map_marker = new google.maps.Marker({
            position: map_Lat_lng,
            map: google_map,
            icon: map_marker_image
        });
        google_map.panBy(0, 0);
        google.maps.event.trigger(google_map, 'resize');
    }
});