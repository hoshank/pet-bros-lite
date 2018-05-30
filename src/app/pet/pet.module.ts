import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './pet.common';
@NgModule({
  imports: [
    ...SHARED_MODULES,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ...COMPONENT_DECLARATIONS,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class PetModule { }
