// Indicates that Cordova is full loaded
// More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

        console.log("Device ready event fired.");

       require([
         "esri/Map",
         "esri/views/MapView",
         "dojo/domReady!"
       ], function(Map, MapView) {

         console.log("Require() loaded.");

         var map = new Map({
           basemap: "streets"
         });

         var view = new MapView({
           container: "viewDiv",
           map: map,
           zoom: 4,
           center: [15, 65]
         });

       });

}