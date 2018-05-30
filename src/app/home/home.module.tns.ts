import { NgModule, NO_ERRORS_SCHEMA, Optional, SkipSelf } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './home.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule {
  // constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
  //   if (parentModule) {
  //       throw new Error('HomeModule already loaded; Import in root module only.');
  //   }
  // }
}
