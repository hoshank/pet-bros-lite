import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
// app
import { SHARED_MODULES, COMPONENT_DECLARATIONS, COMPONENT_EXPORTS } from './menu.common';

@NgModule({
    imports: [
        ...SHARED_MODULES,
        RouterModule,
        MatToolbarModule,
        MatButtonModule
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    exports: [
        ...COMPONENT_EXPORTS
    ]
})
export class MenuModule { }
