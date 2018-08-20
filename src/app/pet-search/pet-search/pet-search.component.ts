import { Component, OnInit } from '@angular/core';
import { Router } from '../../common';

import { PetFinderService } from 'petfinder-angular-service';
import { AvailableValues } from 'petfinder-angular-service/models';
import { KeyLabel } from '../../models/key-label';

@Component({
  selector: 'petbros-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.scss']
})
export class PetSearchComponent implements OnInit {

  public searchOptions = {
    location: 'Boston, MA',
    animal: '',
    breed: '',
    age: '',
    sex: ''
  };

  public animals: KeyLabel[];
  public sexes: KeyLabel[];
  public ages: KeyLabel[];
  public breeds: KeyLabel[];

  public availableValues = AvailableValues;

  constructor(
    private router: Router,
    private petfinderService: PetFinderService) { }

  ngOnInit(): void {
    this.animals = KeyLabel.mapAvailableValues(AvailableValues.animal, 'Any Animal');
    this.sexes = KeyLabel.mapAvailableValues(AvailableValues.sex, 'Any Sex');
    this.ages = KeyLabel.mapAvailableValues(AvailableValues.age, 'Any Age');
    this.breeds = KeyLabel.mapAvailableValues([], 'Any Breed');
  }
  onPropertyCommitted(data) {
    if (data.propertyName === 'animal') {
      this.refreshBreeds();
    }
  }
  refreshBreeds() {
    this.searchOptions.breed = '';
    if (this.searchOptions.animal) {
      this.petfinderService.breedList(this.searchOptions.animal)
      .then(breeds => this.breeds = KeyLabel.mapAvailableValues(breeds, 'Any breed'));
    } else {
      this.breeds = [];
    }
  }

  findPets() {
    const navigationExtras = {
      queryParams: {
        'location': this.searchOptions.location,
        'searchOptions': JSON.stringify(this.searchOptions)
      }
    };
    this.router.navigate(['petSearch/results'], navigationExtras);
  }
}
