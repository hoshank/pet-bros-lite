import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shelter } from 'petfinder-angular-service/models';
import { UserService } from '../../user.service';

@Component({
  selector: 'petbros-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent {
  @Input() shelter: Shelter;

  public favourite = false;

  constructor(private userService: UserService) { }

  addToFavourites() {
    this.favourite = true;
    this.userService.addShelterToFavourites(this.shelter);
  }

  removeFromFavourites() {
    this.favourite = false;
    this.userService.removeShelterFromFavourites(this.shelter.id);
  }
}
