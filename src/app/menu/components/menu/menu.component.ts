import { Component, Input } from '@angular/core';
// app
import { MenuItem } from '../../interfaces/MenuItem';
import { UserService } from '../../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'petbros-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() items: MenuItem[];

  public user$ = this.userService.currentUser;

  router:Router;
  constructor(private userService: UserService) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['./login'] );
  }
}
