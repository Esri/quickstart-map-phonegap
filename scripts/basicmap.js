// Indicates that Cordova is full loaded
// More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady(){
    require(["esri/map", "dojo/domReady!"],
        function(Map) {

            // Create map
            var map = new Map("mapDiv",{
                basemap: "dark-gray",
                center: [-98.58, 39.82],
                zoom: 3
            });

            map.on("load",function(evt) {
                console.log("Map loaded");
            })
        }
    );
}

