import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../user.service';
import { PetBasic } from '../../models';

@Component({
  moduleId: module.id,
  selector: 'petbros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public favouritePets$: Observable<PetBasic[]>;
  public favouriteShelters$: Observable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.favouritePets$ = this.userService.favouritePets$;
    this.favouriteShelters$ = this.userService.favouriteShelters$;
  }
}

