// Indicates that Cordova is full loaded
// More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    //app.receivedEvent('deviceready');
    console.log('Cordova device ready event: ' + 'deviceready');

    require(["esri/map","esri/arcgis/utils","dijit/layout/BorderContainer",
            "dijit/layout/ContentPane"],
        function(Map,utils,BorderContainer,ContentPane) {
            // Create map

            var map = null, helper;
            utils.arcgisUrl = utils.arcgisUrl.replace("file:", "http:");
            utils.createMap("4778fee6371d4e83a22786029f30c7e1", "mapDiv")
                .then(function(response) {
                    dojo.byId("title").innerHTML = response.itemInfo.item.title;
                    dojo.byId("subtitle").innerHTML = response.itemInfo.item.snippet;

                    map = response.map;

                },function(error){
                    console.log("Map creation failed: ", dojo.toJson(error));
                });
        }
    );
}

