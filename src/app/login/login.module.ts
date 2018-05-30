import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
} from '@angular/material';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './login.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
  ],
  exports: [
    ...COMPONENT_DECLARATIONS,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class LoginModule { }

