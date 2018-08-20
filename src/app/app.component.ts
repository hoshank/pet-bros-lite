import { Component } from '@angular/core';
import { MenuItem } from './menu/menu.common';

@Component({
  moduleId: module.id,
  selector: 'petbros-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  menuItems: MenuItem[] = [
    {
      title: 'Login',
      link: ['/login']
    },
    {
      title: 'Home',
      link: ['/home']
    },
    {
      title: 'Find a Pet',
      link: ['/petSearch']
    },
    {
      title: 'Find a Shelter',
      link: ['/shelterSearch']
    }
  ];
}
