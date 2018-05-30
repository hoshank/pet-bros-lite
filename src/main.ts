import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Kinvey } from 'kinvey-angular2-sdk';

if (environment.production) {
  enableProdMode();
}

Kinvey.init({
  appKey: 'kid_HJcA_9jJ7',
  appSecret: '3e678c4e8e7644158632db4fd78737d2'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
