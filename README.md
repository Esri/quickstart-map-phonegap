# quickstart-map-phonegap

A set of samples that show how to get started with the ArcGIS API for JavaScript and PhoneGap/Cordova. 

## Samples
This repo contains the following sample applications:

* `basic-map.html` - a basic mapping app running ArcGIS JS API 4.x.
* `basic-webmap.html` - uses a simple web map.
* `basic-gps.html` - uses the GPS to acquire current location and center the map.

## Life-cycle

It's important that you follow basic guidelines of waiting for the `onDeviceReady` event to fire before loading the ArcGIS JS API.


```html

    <!DOCTYPE html>
    <html>
    <head>
       <link rel="stylesheet" href="https://js.arcgis.com/4.8/esri/css/main.css">
           <style>
           html,
           body, #viewDiv {
             margin: 0;
             padding: 0;
             height: 100%;
             width: 100%;
           }
         </style>
    </head>
    <body>

    <div id="viewDiv"></div>

    <script>

        // Indicates that Cordova is full loaded
        // More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
        document.addEventListener("deviceready", onDeviceReady, false);

        // Wait to load ArcGIS API for JavaScript until after deviceready event
        function onDeviceReady() {

            // Now we load the map
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
    </script>

    <script src="https://js.arcgis.com/4.8/"></script>
    <script src="cordova.js"></script>
    </body>
    </html>

```

## Instructions


1. Follow these instructions to [Create your first Cordova app](https://cordova.apache.org/docs/en/latest/guide/cli/index.html).

2. Copy the contents from this repo into any newly created /www directories
3. Set the sample you want to use in [config.xml](https://cordova.apache.org/docs/en/latest/config_ref/index.html) `<content>` tag.

    	<content src="basic-gps.html" />

8. To take advantage of GPS and Geolocation capabilities you may need to install the [Geolocation plugin](https://www.npmjs.com/package/cordova-plugin-geolocation). 
9. Build the app and launch!

## Testing

These applications will not work as stand-alone web applications because there are coded specifically for PhoneGap/Cordova. 

For the most definitive approach, build and run application directly on a device. Use console.log statements for troubleshooting. With the latest versions of Chrome and Safari you can remotely debug the device as long as it's attached to your laptop via a USB cabable. This is super-convienent and very easy to set up.

## Minimum Requirements

* Access to the [ArcGIS API for JavaScript v4.x](https://developers.arcgis.com/en/javascript).
* One actual working device for each mobile platform you want to deploy to. Simply testing on an emulator isn't good enough for production use. Test on as many devices as possible.
* AndroidStudio and XCode (iOS)
* Android SDK - if you are deploying to Android
* Node.js - for the PhoneGap/Cordova CLI [command-line interface](https://cordova.apache.org/docs/en/latest/guide/cli/#installing-the-cordova-cli).

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

Not getting a location result in Android - try the following:

* If you are using Android Studio look for errors in Android Monitor. You may have also gotten an application alert box when the `watchPosition()` request timed out.
* Add these permissions to the `AndroidManifest.xml file`. You can find it under `/<your_project_directory>/platforms/android/`:

	```
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
	```

* Go into the application settings on the device and enable `Location`.
* Close your application using swipe and then restart it.

## Contributing

Anyone and everyone is welcome to contribute. 

The `create_phonegap_quickstart.sh` shell script can be used to create a repository for tracking changes or to make pull requests. If you are unable to run the script you can manually reproduce the steps described in it. 

## Licensing
Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.