import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shelter } from 'petfinder-angular-service/models';
import { UserService } from '../../user.service';

@Component({
  selector: 'petbros-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent {
  @Input() shelter: any;

  constructor(private userService: UserService) { }

  removeFromFavourites() {
    this.userService.removeShelterFromFavourites(this.shelter._id);
  }
}
