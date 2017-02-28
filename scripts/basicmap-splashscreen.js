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
            });

            // When the map is finished loading its tiles do some cool stuff!
            map.on("update-end", function(){
                console.log("Map is done loading.");
                // Get a reference to the loader's div
                var loaderDiv = document.getElementById("loader-wrapper");
                // When the transition ends remove loader's div from display
                // so that we can access the map with gestures or clicks
                loaderDiv.addEventListener("transitionend",function(){
                    loaderDiv.style.display = "none";
                }, true);
                // Kick off the CSS transition
                loaderDiv.style.opacity = 0.0;
            });
        }
    );
}