import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shelter } from 'petfinder-angular-service/models';
import { UserService } from '../../user.service';

@Component({
  moduleId: module.id,
  selector: 'petbros-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent {
  @Input() shelter: Shelter;

  // TODO: find a way to initialise this value based on the favourite list in FireBase
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
