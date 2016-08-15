# quickstart-map-phonegap

A set of simple samples that show how to get started with the ArcGIS API for JavaScript and PhoneGap/Cordova. These samples provide best practices for using PhoneGap and Cordova across different device operating systems and within the PhoneGap/Cordova application lifecycle.

## Samples
This repo contains four sample applications.  

* index_basicmap.html - a basic mapping application configuration.
* index_basicwebmap.html - uses a simple web map.
* index_basicgps.html - uses the GPS to acquire current location and center the map.
* index_jquerymobilegps.html - demonstrates how to use jQuery mobile with PhoneGap and the ArcGIS API for JavaScript. 
* index_jquerymobilegps_localarcgis.html - demonstrates a local version of the ArcGIS API for JavaScript that was created using [http://jso.arcgis.com/](http://jso.arcgis.com/). 

The jQuery sample also makes use of the [jquery-mobile-map-js](https://github.com/Esri/jquery-mobile-map-js) repository's jQueryHelper library.

## Life-cycle

It's important that you follow basic guidelines when using the ArcGIS API for JavaScript within a PhoneGap/Cordova framework. Below is an example that oulines the basic life-cycle pattern. The order in which everything loads is important to ensure that the mapping library will work correctly. The samples included with this repo provide fully working examples of the life-cycle.


```html

	<head>
         <link rel="stylesheet" href="https://js.arcgis.com/3.16/esri/css/esri.css">
	</head>
    <body>
    
    <div id="mapDiv"></div>
    
	<script>
	
		// Indicates that Cordova is full loaded
		// More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
    	document.addEventListener("deviceready", onDeviceReady, false);
		
		// Wait to load ArcGIS API for JavaScript until after deviceready event
		function onDeviceReady() {
		
			// Now we load the map
			require(["esri/map", "dojo/domReady!"], function(Map) {
				map = new Map("map", {
            		basemap: "topo",  
            		center: [-122.45, 37.75], // longitude, latitude
            		zoom: 13
        		});
    		});
		}
	</script>
	
	<script src="http://js.arcgis.com/3.16"></script>
	<script src="cordova.js"></script>
    </body>

```

## Instructions


Install the Cordova [command line interface (CLI)](http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html#The%20Command-Line%20Interface), then:

1. Fork and then clone this repo or download the .zip file. 
2. [Download Cordova](http://cordova.apache.org/).
3. Follow the Cordova [platform installation instructions](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_index.md.html#Platform%20Guides) for installation and configuration instructions.
4. Follow the Cordova guidelines for creating an app. Example

		$ cordova create hello com.example.hello HelloWorld

5. Add additional platforms. Example

		$ cordova platform add android

6. Copy the contents from this repo into any newly created /www directories
7. Set which sample you want the application to launch in the [config.xml](http://cordova.apache.org/docs/en/4.0.0/config_ref_index.md.html#The%20config.xml%20File) `<content>` tag.

    	<content src="index_jquerymobilegps.html" />

8. To take advantage of GPS and Geolocation capabilities you may need to install the [Geolocation plugin](https://www.npmjs.com/package/cordova-plugin-geolocation). 
9. Build the app and launch!

## Testing

These applications will not work as stand-alone web applications because there are coded specifically for PhoneGap/Cordova. 

For the most definitive approach, build and run application directly on a device. Use console.log statements for troubleshooting. With the latest versions of Chrome and Safari you can remotely debug the device as long as it's attached to your laptop via a USB cabable. This is super-convienent and very easy to set up.

For rapid tweaking/testing cycles you should also check out the [PhoneGap Desktop App](https://github.com/phonegap/phonegap-app-desktop). 

## Minimum Requirements

* One actual working device for each mobile platform you want to deploy to. Simply testing on an emulator isn't good enough for production use. Test on as many devices as possible.
* AndroidStudio and XCode (iOS)
* Android SDK - if you are deploying to Android
* Node.js - if you want to use the very easy PhoneGap/Cordova CLI [command-line interface](http://cordova.apache.org/docs/en/5.0.0/guide_cli_index.md.html#The%20Command-Line%20Interface). Highly recommended!

## Resources

* [ArcGIS for JavaScript API Resources](https://developers.arcgis.com/javascript/)
* [jQueryHelper Library](https://github.com/Esri/jquery-mobile-map-js)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute. 

## Licensing
Copyright 2016 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[](Esri Tags: ArcGIS PhoneGap Cordova QuickStart)
[](Esri Language: JavaScript)
