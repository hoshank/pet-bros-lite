import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './shelter-details.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class ShelterDetailsModule { }
