import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'petbros-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private static REDIRECT_ROUTE = ['/home'];
  public email = 'test@email.com';
  public password = 'seba1234';

  public displayName = 'Sebastian';

  constructor(
      private userService: UserService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const user = this.route.snapshot.data['user'];
    if (user) {
      this.redirect();
    }
  }

  async login(isValid: boolean) {
    if (isValid) {
      await this.userService.signIn(this.email, this.password);

      this.redirect();
    }
  }

  async register(isValid: boolean) {
    if (isValid) {
      await this.userService.register(this.email, this.password, this.displayName);

      this.redirect();
    }
  }

  logout() {
    this.userService.logout();
  }

  reset() {
    this.userService.resetPassword('sebawita@gmail.com');
  }

  private redirect() {
    this.router.navigate(LoginComponent.REDIRECT_ROUTE, { clearHistory: true } as NavigationExtras);
  }
}
