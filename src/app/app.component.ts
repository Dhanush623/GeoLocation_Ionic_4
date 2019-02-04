import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { 
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  location: any = [];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar,
    private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // Following codes Execute get current Location
    // enableHighAccuracy: true for getting Accuracy Distance
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.location.push(resp);
      console.log(resp);
      this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude)
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // Following codes Execute get current Location for Every Few Secounds
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);
      this.whereInTheEarth(data.coords.latitude, data.coords.longitude)
      console.log(data.coords.latitude);
      console.log(data.coords.longitude );
    });
  }

  whereInTheEarth(latitude, longitude) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    console.log(latitude)
    console.log(longitude);

    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
    .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
    .catch((error: any) => console.log(error));

  }
}
