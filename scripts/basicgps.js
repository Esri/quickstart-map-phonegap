// Indicates that Cordova is full loaded
// More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){

  console.log("Device ready event.");

  require([
    "esri/Map",
    "esri/views/MapView",
    "dojo/domReady!"
  ], function(Map, MapView) {

    let map = new Map({
      basemap: "streets"
    });

    let view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 15,
      center: [15, 65] // longitude, latitude
    });

    view.when(function(){
      startGeolocation();
    }, function(err){
      console.error("There was a problem loading the map: ", err);
    });

    function startGeolocation(){
      console.log("Starting geolocation...");
      let location = navigator.geolocation.watchPosition(
          locationSuccess,
          locationError,
          {
            maxAge: 250000,
            timeout: 15000,
            enableHighAccuracy:true
          }
      );
    }

    // Handle location success
    function locationSuccess(position){
      if(position.coords.latitude != null || position.coords.longitude != null){
        console.log("long: " + position.coords.longitude + ", lat: " + position.coords.latitude);
        view.center = [position.coords.longitude,position.coords.latitude];
      }
    }

    function locationError(error){
      console.log("locationError code: " + error.code);

      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied request for geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable. Check application settings, make sure location permissions have been granted");
          break;
        case error.TIMEOUT:
          alert( "The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
      }
    }

  });
}