import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { RouterModule } from '../common';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

@NgModule({
  declarations: [],
  exports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    RouterModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
