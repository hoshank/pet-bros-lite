import { RouterModule } from './common';

import { AppRoutes, guards } from './app.routes';

import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { LoginModule } from './login';

import { UserService } from './user.service';
import { NavigationService } from './navigation.service';

import { PetFinderService, API_KEY_TOKEN } from 'petfinder-angular-service';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule,
  RouterModule.forRoot(AppRoutes), // { useHash: true }
  MenuModule,
  LoginModule
];

export const COMPONENT_DECLARATIONS: any[] = [
  AppComponent
];

export const PROVIDERS: any[] = [
  UserService,
  NavigationService,
  { provide: API_KEY_TOKEN, useValue: '3b3fe2619dfd3c4e94c2d7efd24592e1' },
  PetFinderService,
  ...guards,
];
