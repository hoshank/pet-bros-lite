import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// nativescript
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES, COMPONENT_DECLARATIONS, PROVIDERS } from './app.common';

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    ...SHARED_MODULES
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  providers: [
    ...PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
