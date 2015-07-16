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
        //app.receivedEvent('deviceready');
        console.log('Cordova device ready event: ' + 'deviceready');

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
};

app.initialize();
