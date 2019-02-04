# GeoLocation_Ionic_4
This project is getting Location using Geo-location in Ionic 4 framework.

For Getting Current Location. I'm just using Ionic-native geolocation
Reference: https://ionicframework.com/docs/native/geolocation/
Or
Install:  ionic cordova plugin add cordova-plugin-geolocation and
          npm install @ionic-native/geolocation
this is for getting Current Location and Watch Current Location. From this we only get latitude and longitude.

So, we need to get the name of the location then we have to use Native geocoder
Reference: https://ionicframework.com/docs/native/native-geocoder/
Or
Install:  ionic cordova plugin add cordova-plugin-nativegeocoder and
          npm install @ionic-native/native-geocoder
in this we can get Location Name of latitude and longitude.
