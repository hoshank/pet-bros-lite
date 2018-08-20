import { Component, OnInit } from '@angular/core';
import { PetFinderService } from 'petfinder-angular-service';
import { Pet, PetSearchOptions, Options, AvailableValues } from 'petfinder-angular-service/models';
import { UserService } from '../../user.service';
import { NavigationService } from '../../navigation.service';
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
    private navigation: NavigationService,
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
    this.navigation.navigate(['petSearch/results'], navigationExtras);
  }
}
