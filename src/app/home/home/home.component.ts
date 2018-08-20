import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../user.service';
import { PetBasic } from '../../models';

@Component({
  selector: 'petbros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public favouritePets$: Observable<PetBasic[]>;
  public favouriteShelters$: Observable<any[]>;

  constructor(public user: UserService) { }

  ngOnInit() {
    this.favouritePets$ = this.user.favouritePets$;
    this.favouriteShelters$ = this.user.favouriteShelters$;
  }

  logout() {
    this.user.logout();
  }
}

