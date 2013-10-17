# quickstart-map-phonegap

A set of simple JavaScript samples that show how to get started with PhoneGap/Cordova and the ArcGIS API for JavaScript. These samples provide best practices for using PhoneGap and Cordova across different device operating systems and within the PhoneGap/Cordova application lifecycle.

PhoneGap is based on the [Apache Cordova](http://cordova.apache.org/) open source project. You can download PhoneGap or Cordova and both will work. Adobe has a few additions to PhoneGap that don't exist in Cordova such as [PhoneGap Build](https://build.phonegap.com/apps) which is an online build system. 

## Features
This repo contains four sample applications. 

* index.html - the Cordova Hello World app. 
* index_basicmap.html - a basic mapping application configuration.
* index_basicwebmap.html - uses a simple web map.
* index_basicgps.html - uses the GPS to acquire current location and center the map.
* index_jquerymobilegps.html - demonstrates how to use jQuery mobile with PhoneGap and the ArcGIS API for JavaScript.

## Instructions

**NOTE:** The current PhoneGap.com online documentation is confusing and alot of outdated information and terminology, so I recommend just using Cordova and the Cordova documentation. The Cordova documentation appears to be up to date and easy to follow. 

**Don't have node.js?** If you don't have node.js you can't run the command-line build tools. But, hey, no problem. Just use this [quickstart-phonegap-template](https://github.com/andygup/quickstart-phonegap-template) repo.

If you do plan to use the command line tools then follow these steps:

1. Fork and then clone this repo or download the .zip file. 
2. [Download Cordova](http://cordova.apache.org/).
3. Follow the Cordova [platform installation instructions](http://cordova.apache.org/docs/en/3.1.0/guide_platforms_index.md.html#Platform%20Guides) for installation and configuration instructions.
4. Follow the Cordova guidelines for Creating an app. Example

		$ cordova create hello com.example.hello HelloWorld

5. Add additional platforms. Example

		$ cordova platform add android

6. Copy the sample apps directory from this repo into any newly created /www directories
7. Set which sample you want the application to launch in the config.xml <content> tag.
8. Build the app and launch!

## Testing

These applications will not work as stand-alone web applications because there are coded specifically for PhoneGap/Cordova. So you have several other options:

**Option 1** - Build and run application directly on a device. Use console.log statements for troubleshooting.

**Option 2 **- Use the [Ripple Emulator Chrome Plugin](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc?hl=en) to test locally on your machine.

Here's a good article to check out by [Andy Trice](http://www.tricedesigns.com/2013/01/18/my-workflow-for-developing-phonegap-applications/) on using Ripple. This article also provides suggestions on how to set up Chrome for testing on http://localhost. I'm working on a blog article to explain this in more detail.


## Minimum Requirements

* One actual working device for each mobile platform you want to deploy to. Simply testing on an emulator isn't good enough for product. Test on as many devices as possible.
* Eclipse (Android) or ADT Bundle (Android) and XCode (iOS)
* Android SDK - if you are deploying to Android
* Node.js - if you want to use the very easy PhoneGap/Cordova command-line interface.

## Resources

* [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute. 

## Licensing
Copyright 2013 Esri

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
