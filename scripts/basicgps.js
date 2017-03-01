// Indicates that Cordova is full loaded
// More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady(){
    console.log("Loading ArcGIS...");
    require(["esri/map","esri/symbols/PictureMarkerSymbol","esri/graphic",
            "esri/SpatialReference",
            "esri/geometry/Point",
            "dojo/on","dojo/domReady!"],
        function(Map,PictureMarkerSymbol,Graphic,SpatialReference,Point,on) {
            // Create map
            var map = new Map("mapDiv",{
                basemap: "topo",
                center: [-98.58, 39.82],
                zoom: 3
            });
            // Wait until map has loaded before starting geolocation
            map.on("load",startGeolocation);
            // Create the marker symbol
            var markerSymbol = new PictureMarkerSymbol({
                "angle":0,
                "xoffset":0,
                "yoffset":0,
                "type":"esriPMS",
                "url":"images/green-pin.png",
                "width":35,
                "height":35
            });

            function startGeolocation(){
                console.log("Starting geolocation...");
                var location = navigator.geolocation.watchPosition(
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
                    var wgsPt = new Point(position.coords.longitude,position.coords.latitude, new SpatialReference({wkid:4326}));
                    map.graphics.add(new Graphic(wgsPt, markerSymbol));
                    map.centerAndZoom(wgsPt, 12);
                }
            }

            function locationError(err){
                console.log("locationError code: " + err.code);
            }
        }
    );
}
