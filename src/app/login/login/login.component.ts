import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { NavigationService } from '../../navigation.service';

@Component({
  moduleId: module.id,
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
      private navigationService: NavigationService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const user = this.route.snapshot.data['user'];
    if (user) {
      this.redirect();
    }
  }

  login(isValid: boolean) {
    if (isValid) {
      this.userService.signIn(this.email, this.password)
      .then(user => {
        this.redirect();
      });
    }
  }

  register(isValid: boolean) {
    if (isValid) {
      this.userService.register(this.email, this.password, this.displayName)
      .then(user => {
        this.redirect();
      });
    }
  }

  logout() {
    this.userService.logout();
  }

  update() {
    alert('remove update function');
    // this.userService.updateUserDetails({
    //   displayName: this.displayName,
    //   photoURL: null,
    //   email: this.email
    // });
  }

  reset() {
    this.userService.resetPassword('sebawita@gmail.com');
  }

  private redirect() {
    this.navigationService.navigate(LoginComponent.REDIRECT_ROUTE, { clearHistory: true });
  }
}
