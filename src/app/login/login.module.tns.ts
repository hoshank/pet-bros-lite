import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './login.common';

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  exports: [
    ...COMPONENT_DECLARATIONS,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class LoginModule { }
