import { Component, OnInit } from '@angular/core';
import { PetFinderService } from 'petfinder-angular-service';
import { Shelter } from 'petfinder-angular-service/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'petbros-shelter-search-results',
  templateUrl: './shelter-search-results.component.html',
  styleUrls: ['./shelter-search-results.component.scss']
})
export class ShelterSearchResultsComponent implements OnInit {
  public shelters: Shelter[] = [];

  constructor(
    private petfinderService: PetFinderService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams;

    if (queryParams['searchByBreed'] === 'true') {
      const animal = queryParams['animal'];
      const breed = queryParams['breed'];

      this.searchByBreed(animal, breed);
    } else {
      const location = queryParams['location'];
      const name = queryParams['name'];

      this.search(location, name);
    }
  }

  private async search(location: string, name: string) {
    this.shelters = await this.petfinderService.findShelters(location, {name});
  }

  private async searchByBreed(animal: string, breed: string) {
    this.shelters = await this.petfinderService.findSheltersByBreed(animal, breed);
  }
}
