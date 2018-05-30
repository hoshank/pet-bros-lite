import { NgModule } from '@angular/core';
import { MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './shelter-search.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class ShelterSearchModule { }
