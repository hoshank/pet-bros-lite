import { Component, Input } from '@angular/core';
// app
import { MenuItem } from '../../interfaces/MenuItem';
import { UserService } from '../../../user.service';
import { NavigationService } from '../../../navigation.service';

@Component({
  moduleId: module.id,
  selector: 'seed-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() items: MenuItem[];

  public user$ = this.userService.user$;

  constructor(private userService: UserService, private navigation: NavigationService) { }

  logout() {
    this.userService.logout();
    this.navigation.navigate(['/login']);
  }
}
