// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { PetSearchRoutes } from './pet-search.routes';
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetSearchResultsComponent } from './pet-search-results/pet-search-results.component';
import { PetModule } from '../pet';

export const SHARED_MODULES: any[] = [
  SharedModule,
  PetModule,
  RouterModule.forChild(<any>PetSearchRoutes),
];

export const COMPONENT_DECLARATIONS: any[] = [
  PetSearchComponent,
  PetSearchResultsComponent
];
