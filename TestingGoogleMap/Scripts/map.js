﻿let mappy;
let infowindow;
let messagewindow;
let newmarker;




function initMap() {
    let uluru = { lat: 27.770068, lng: -82.636420 };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru,
        mapTypeId: google.maps.MapTypeId.ROADMAP, styles: [{ "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9b2a6" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#ae9e90" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#93817c" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#a5b076" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#447530" }] }, { "featureType": "road", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#fdfcf8" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f8c967" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9bc62" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#e98d58" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#db8555" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#806b63" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "color": "#8f7d77" }] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ebe3cd" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] }]
    });

    talkToServer();
}



function initMapAuth() {

    let ulur = { lat: 27.770068, lng: -82.636420 };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: ulur,
        mapTypeId: google.maps.MapTypeId.ROADMAP, styles: [{ "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9b2a6" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#ae9e90" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#93817c" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#a5b076" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#447530" }] }, { "featureType": "road", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#fdfcf8" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f8c967" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9bc62" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#e98d58" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#db8555" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#806b63" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "color": "#8f7d77" }] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ebe3cd" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] }]
    });

    infowindow = new google.maps.InfoWindow({
        content: document.getElementById('form')
    })

    messagewindow = new google.maps.InfoWindow({
        content: document.getElementById('message') 
    });



    google.maps.event.addListener(mappy, 'click', function (event) {
        console.log('got here')
        newmarker = new google.maps.Marker({
            position: event.latLng,
            map: mappy
        });

        google.maps.event.addListener(newmarker, "click", function () {
            infowindow.open(mappy, newmarker);
        });
    });

    talkToServer();
}


function initMapSingle(latValue, longValue) {
    let ulu = { lat: latValue, lng: longValue };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: ulu,
        map:mappy
    });

    let singleMarker = new google.maps.Marker({
        position: ulu,
        map: mappy
    });
    
}



let talkToServer = () => {

    $.ajax({
        url: '/api/MapsDeux',
        dataType: "json",
        success: (data) => { 

            //load marker data here 

            var markers = data.map((item) => {

               

                var _m = new google.maps.Marker({
                    position: { lat: item.Lat, lng: item.Long },
                    //title: item.Title,
                    //label: item.Title,
                    icon: 'http://i.imgur.com/NBZi6ra.png',
                });

                var contentString = 
                    item.Description + 
                    '<img src="' + item.Image + '"></img>'
                    ;

                var infowindow = new google.maps.InfoWindow({
                    content: item.Title, contentString
                });

                _m.addListener("click", function () {
                    infowindow.open(mappy, _m);
                });
                return _m;

            });


            var markerCluster = new MarkerClusterer(mappy, markers,
                { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

            markers
        },
        error: (data) => {
            console.log("oops", data)
        }
    });

}
       

function saveData() {
    let title = escape(document.getElementById('title').value);
    let address = escape(document.getElementById('address').value);
    let latlng = newmarker.getPosition();

    //let mapdata = [{ Title: title, Address: address, Lat: latlng.lat(), Long: latlng.lng() }];

    $.ajax({
        url: "/api/MapsDeux",
        data: JSON.stringify({
            // Those property names must match the property names of map object in the controller
            Title: title,
            Address: address,
            Lat: latlng.lat(),
            Long: latlng.lng()
        }),
        contentType: "application/json",
        type: "POST",
        dataType: "json",
        success: (data) => {
            console.log('hello', data)
        }

    });

}







