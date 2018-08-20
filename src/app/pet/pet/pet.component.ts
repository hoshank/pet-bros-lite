import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from 'petfinder-angular-service/models';
import { UserService } from '../../user.service';

@Component({
  selector: 'petbros-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent {
  @Input() pet: Pet;

  public favourite = false;

  constructor(private userService: UserService) { }

  updateFavourite() {
    if (this.favourite) {
      this.removeFromFavourites();
    } else {
      this.addToFavourites();
    }
  }

  addToFavourites() {
    this.favourite = true;
    this.userService.addPetToFavourites(this.pet);
  }

  removeFromFavourites() {
    this.favourite = false;
    this.userService.removePetFromFavourites(this.pet.id);
  }
}
