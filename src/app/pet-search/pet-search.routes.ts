import { Routes } from '@angular/router';
// app
import { PetSearchComponent } from './pet-search/pet-search.component';
import { PetSearchResultsComponent } from './pet-search-results/pet-search-results.component';

export const PetSearchRoutes: Routes = [
  {
    path: '',
    component: PetSearchComponent
  }, {
    path: 'results',
    component: PetSearchResultsComponent
  }
];
