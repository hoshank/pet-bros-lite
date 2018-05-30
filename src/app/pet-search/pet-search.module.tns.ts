import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './pet-search.common';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
@NgModule({
  imports: [
    ...SHARED_MODULES,
    NativeScriptUIDataFormModule
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PetSearchModule { }
