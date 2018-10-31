import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../user.service';
import { PetBasic } from '../../models';

@Component({
  selector: 'petbros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public favouritePets$: Observable<PetBasic[]>;
  public favouriteShelters$: Observable<any[]>;

  petsTabActive;
  sheletrsTabActive;

  constructor(public user: UserService) { 
    
  }

  ngOnInit() {
    this.favouritePets$ = this.user.favouritePets$;
    this.favouriteShelters$ = this.user.favouriteShelters$;
  }

  ngOnAfterViewInit(){
    this.petsTabActive= true;
    this.sheletrsTabActive=false;
  }


  tabChange(tab){
    if(tab=='pets'){
      this.petsTabActive= true;
      this.sheletrsTabActive=false;
    }
    else if(tab=="shelters"){
      this.petsTabActive=false;
      this.sheletrsTabActive=true;
    }
   
  }


}

