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

        require(["esri/map","esri/arcgis/utils","esri/dijit/Legend","esri/dijit/Scalebar","dijit/layout/BorderContainer",
                "dijit/layout/ContentPane"],
            function(Map,utils,Legend,Scalebar,BorderContainer,ContentPane) {
                // Create map

                var map = null, helper;
                utils.arcgisUrl = utils.arcgisUrl.replace("file:", "http:");
                utils.createMap("4778fee6371d4e83a22786029f30c7e1", "mapDiv")
                    .then(function(response) {
                        dojo.byId("title").innerHTML = response.itemInfo.item.title;
                        dojo.byId("subtitle").innerHTML = response.itemInfo.item.snippet;

                        map = response.map;

                        //add the scalebar
                        var scalebar = new Scalebar({
                            map: map,
                            scalebarUnit: "english"
                        });

                        //add the legend. Note that we use the utility method getLegendLayers to get
                        //the layers to display in the legend from the createMap response.
                        var legendLayers = utils.getLegendLayers(response);
                        var legendDijit = new Legend({
                            map: map,
                            layerInfos: legendLayers
                        },"legend");
                        legendDijit.startup();

                    },function(error){
                        console.log("Map creation failed: ", dojo.toJson(error));
                    });
            }
        );
    }
};

app.initialize();
