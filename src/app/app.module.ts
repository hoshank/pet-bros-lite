import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
// app
import { AppComponent } from './app.component';
import { Config } from './common/index';
import { SHARED_MODULES, COMPONENT_DECLARATIONS, PROVIDERS } from './app.common';

import { UserService } from './user.service';
import { NavigationService } from './navigation.service';
import { PetFinderService, API_KEY_TOKEN } from 'petfinder-angular-service';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login/login.component';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    ...SHARED_MODULES,
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class AppModule {}
