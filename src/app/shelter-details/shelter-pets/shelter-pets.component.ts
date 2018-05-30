import { Component, OnInit, Input } from '@angular/core';
import { PetFinderService } from 'petfinder-angular-service';
import { Pet } from 'petfinder-angular-service/models';

@Component({
  moduleId: module.id,
  selector: 'petbros-shelter-pets',
  templateUrl: './shelter-pets.component.html',
  styleUrls: ['./shelter-pets.component.scss']
})
export class ShelterPetsComponent implements OnInit {
  @Input() shelterId: string;

  public pets: Pet[] = [];

  constructor(private petFinderService: PetFinderService) { }

  ngOnInit() {
    this.petFinderService.findShelterPets(this.shelterId)
    .then(pets => this.pets = pets);
  }

}
