// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { PetDetailsRoutes } from './pet-details.routes';
import { PetDetailsComponent } from './pet-details/pet-details.component';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>PetDetailsRoutes),
];

export const COMPONENT_DECLARATIONS: any[] = [
  PetDetailsComponent
];
