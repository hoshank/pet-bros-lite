import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// import { NavigationOptions } from 'nativescript-angular/router/ns-location-strategy';

@Injectable()
export class NavigationService {
  constructor(private router: Router) { }

  public navigate(commands: any[], extras?: NavigationExtras & NavigationOptions): Promise<boolean> {
    return this.router.navigate(commands, extras);
  }
}

export interface NavigationOptions {
    clearHistory?: boolean;
    animated?: boolean;
    transition?: NavigationTransition;
}

export interface NavigationTransition {
    name?: string;
    instance?: any; // Transition;
    duration?: number;
    curve?: any;
}
