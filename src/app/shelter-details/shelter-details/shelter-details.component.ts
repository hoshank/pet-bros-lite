import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetFinderService } from 'petfinder-angular-service';
import { Shelter } from 'petfinder-angular-service/models';
import { UserService } from '../../user.service';

@Component({
  selector: 'petbros-shelter-details',
  templateUrl: './shelter-details.component.html',
  styleUrls: ['./shelter-details.component.scss']
})
export class ShelterDetailsComponent implements OnInit {
  public shelter: Shelter;
  // TODO: find a way to initialise this value based on the favourite list in FireBase
  public favourite = false;

  constructor(
    private route: ActivatedRoute,
    private petFinderService: PetFinderService,
    private userService: UserService) { }

  ngOnInit() {
    const shelterId = this.route.snapshot.params['shelterId'];

    this.petFinderService.getShelter(shelterId)
    .then(shelter => this.shelter = shelter);
  }

  addToFavourites() {
    this.favourite = true;
    this.userService.addShelterToFavourites(this.shelter);
  }

  removeFromFavourites() {
    this.favourite = false;
    this.userService.removeShelterFromFavourites(this.shelter.id);
  }
}
