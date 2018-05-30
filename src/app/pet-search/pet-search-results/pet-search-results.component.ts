import { Component, OnInit } from '@angular/core';
import { PetFinderService } from 'petfinder-angular-service';
import { PetSearchOptions, Pet } from 'petfinder-angular-service/models';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'petbros-pet-search-results',
  templateUrl: './pet-search-results.component.html',
  styleUrls: ['./pet-search-results.component.scss']
})
export class PetSearchResultsComponent implements OnInit {
  public location = 'Boston, MA';
  public searchOptions: PetSearchOptions;

  public pets: Pet[] = [];

  constructor(
    private petfinderService: PetFinderService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.location = this.activatedRoute.snapshot.queryParams['location'];
    this.searchOptions = JSON.parse(this.activatedRoute.snapshot.queryParams['searchOptions']);
    this.search();
  }

  async search() {
    this.pets = await this.petfinderService.findPets(this.location, this.searchOptions);
  }
}
