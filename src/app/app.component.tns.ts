import { Component } from '@angular/core';
import { Kinvey } from 'kinvey-nativescript-sdk';

@Component({
  selector: 'petbros-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor() {
    Kinvey.init({
      appKey: 'kid_HJcA_9jJ7',
      appSecret: '3e678c4e8e7644158632db4fd78737d2'
    });
  }
}
