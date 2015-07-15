var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        mapInit();
    }
};
var mapInit = function(){
    console.log("Loading ArcGIS...");
    require(["esri/map","esri/symbols/PictureMarkerSymbol","esri/graphic",
            "esri/SpatialReference",
            "esri/geometry/Point",
            "dojo/on","dojo/domReady!"],
        function(Map,PictureMarkerSymbol,Graphic,SpatialReference,Point,on) {
            var helper = null;

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

                try{
                    helper = new jQueryHelper(map);
                }
                catch(err) {
                    console.log("Unable to initialize jQueryHelper: " + err.message);
                }

                navigator.geolocation.getCurrentPosition(locationSuccess,locationError,{setHighAccuracy:true});
            }

            // Handle location success
            function locationSuccess(position){
                if(position.coords.latitude != null || position.coords.longitude != null){
                    console.log("long: " + position.coords.longitude + ", lat: " + position.coords.latitude);
                    var wgsPt = new Point(position.coords.longitude,position.coords.latitude, new SpatialReference({wkid:4326}));
                    map.graphics.add(new Graphic(wgsPt, markerSymbol));
                    map.centerAndZoom(wgsPt, 12);

                    //Set jQueryHelper properties
                    helper.setCenterPt(position.coords.latitude,position.coords.longitude,4326);
                    helper.setZoom(9);
                }
            }

            function locationError(err){
                console.log("locationError: " + err.toString());
            }

        } //function
    ); //require
};
app.initialize();