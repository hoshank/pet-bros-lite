// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { ClarityModule } from '@clr/angular';
import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { ShelterComponent } from './shelter/shelter.component';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>HomeRoutes),
  ClarityModule,
];

export const COMPONENT_DECLARATIONS: any[] = [
  HomeComponent,
  PetComponent,
  ShelterComponent
];
