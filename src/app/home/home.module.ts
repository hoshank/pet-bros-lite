import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatTabsModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './home.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class HomeModule {
  // constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
  //   if (parentModule) {
  //       throw new Error('HomeModule already loaded; Import in root module only.');
  //   }
  // }
}
