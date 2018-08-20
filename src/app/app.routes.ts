import { Routes } from '@angular/router';

import { AuthGuard } from './auth-guards.service';
import { UserResolver } from './user-resolver.service';

import { loginRoutes } from './login';

export const guards = [
  AuthGuard,
  UserResolver,
];

const authGuards = {
  canLoad: [AuthGuard],
  canActivateChild: [AuthGuard],
};

/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    children: loginRoutes,
    resolve: {
      user: UserResolver,
    },
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    ...authGuards
  },
  {
    path: 'petSearch',
    loadChildren: './pet-search/pet-search.module#PetSearchModule',
    ...authGuards
  },
  {
    path: 'shelterSearch',
    loadChildren: './shelter-search/shelter-search.module#ShelterSearchModule',
    ...authGuards
  },
  {
    path: 'pet/:petId',
    loadChildren: './pet-details/pet-details.module#PetDetailsModule',
    ...authGuards
  },
  {
    path: 'shelter/:shelterId',
    loadChildren: './shelter-details/shelter-details.module#ShelterDetailsModule',
    ...authGuards
  }
];
