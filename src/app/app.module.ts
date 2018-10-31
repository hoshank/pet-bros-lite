import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// app
import { AppComponent } from './app.component';
import { Config } from './common/index';
import { SHARED_MODULES, COMPONENT_DECLARATIONS, PROVIDERS } from './app.common';

import { HomeModule } from './home/home.module';
import { ClarityModule } from '@clr/angular';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    ...COMPONENT_DECLARATIONS,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    ...SHARED_MODULES,
    ClarityModule,
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class AppModule {}
