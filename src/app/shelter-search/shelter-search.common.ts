// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { ShelterSearchRoutes } from './shelter-search.routes';
import { ShelterSearchComponent } from './shelter-search/shelter-search.component';
import { ShelterSearchResultsComponent } from './shelter-search-results/shelter-search-results.component';
import { ShelterComponent } from './shelter/shelter.component';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>ShelterSearchRoutes)
];

export const COMPONENT_DECLARATIONS: any[] = [
  ShelterSearchComponent,
  ShelterSearchResultsComponent,
  ShelterComponent
];
