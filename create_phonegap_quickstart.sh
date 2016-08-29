#!/bin/bash

set -e # Exit script on any error

# "This is a shell script for manually creating a PhoneGap/cordova repo"
# "for the purpose of making changes or updating the github repo"

read -p "Press [Enter] to create Cordova project…"

cordova create quickstart-map-phonegap com.esri.phonegap QuickstartMap "$1" || exit 1

read -p "Project scaffolding has been created. Press [Enter] to continue…"

echo "cd to new project directory"
cd quickstart-map-phonegap/

echo "add android platform to project"
cordova platform add android --save

echo "cd to android or is platform directory"
cd platforms/android/

echo "clone origin github repo to temp dir. Be sure to use your own fork!"
git clone https://github.com/Esri/quickstart-map-phonegap.git temp

echo "Copying contents over"
read -p "Press [Enter] to continue…"

#mv -v temp/.git assets/www/
cp -Rv temp/ assets/www/

echo "deleting temp directory"
rm -rf temp

echo "reset git in assets/www/"
cd assets/www/
git reset --hard HEAD # git will think you deleted all the important files
git status # most likely there will be a MainActivity.java untracked

echo "DONE! Please see shell script for additional manual tasks."

<<COMMENT

# Be sure to manually add permissions in AndroidManifest.xml!

    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

COMMENT
