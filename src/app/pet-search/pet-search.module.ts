import { NgModule } from '@angular/core';
import { MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './pet-search.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class PetSearchModule { }
