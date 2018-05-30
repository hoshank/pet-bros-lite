import { Routes } from '@angular/router';
// app
import { ShelterSearchComponent } from './shelter-search/shelter-search.component';
import { ShelterSearchResultsComponent } from './shelter-search-results/shelter-search-results.component';

export const ShelterSearchRoutes: Routes = [
  {
    path: '',
    component: ShelterSearchComponent
  }, {
    path: 'results',
    component: ShelterSearchResultsComponent
  }
];
