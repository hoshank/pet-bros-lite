import { CommonModule } from '@angular/common';
// app
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ClarityModule } from '@clr/angular';

export const SHARED_MODULES: any = [
    CommonModule,
  ClarityModule,
];

export const COMPONENT_DECLARATIONS: any[] = [
    MenuComponent,
    MenuItemComponent
];

export const COMPONENT_EXPORTS: any[] = [
    MenuComponent
];

export * from './interfaces/MenuItem';
