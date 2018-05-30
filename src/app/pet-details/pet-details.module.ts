import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
// import { Mo } from '@angular/material/button';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './pet-details.common';

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
export class PetDetailsModule { }
