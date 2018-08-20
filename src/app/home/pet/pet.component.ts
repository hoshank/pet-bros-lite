import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from 'petfinder-angular-service/models';
import { PetBasic } from '../../models';
import { UserService } from '../../user.service';

@Component({
  selector: 'petbros-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {
  @Input() pet: PetBasic;

  constructor(private userService: UserService) { }

  removeFromFavourites() {
    this.userService.removePetFromFavourites(this.pet._id);
  }
}
