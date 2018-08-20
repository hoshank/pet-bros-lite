import { Injectable } from '@angular/core';

import { Router } from './common';
import { NavigationExtras } from '@angular/router';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PetBasic } from './models';
import { Pet, Shelter } from 'petfinder-angular-service/models';
import { assets } from './common/utils/defaults';

import { User } from './models/user.model';
import { Kinvey, CacheStore } from './common/utils/kinvey';

@Injectable({ providedIn: 'root' })
export class UserService {
  private petsStore: CacheStore<PetBasic>;
  private sheltersStore: CacheStore<any>;

  private user$: BehaviorSubject<User>;
  private pets$: BehaviorSubject<PetBasic[]> = new BehaviorSubject([]);
  private shelters$: BehaviorSubject<any[]> = new BehaviorSubject([]);


  public get currentUser(): Observable<User> {
    return this.user$;
  }

  /**
   * Returns a long lived Observable, which returns pets for currently logged in user
   * It will automatically switch to a new user when a new user loggs in
   */
  public get favouritePets$(): Observable<PetBasic[]> {
    return this.pets$;
  }

  /**
   * Returns a long lived Observable, which returns shelters for currently logged in user
   * It will automatically switch to a new user when a new user loggs in
   */
  public get favouriteShelters$(): Observable<any[]> {
    return this.shelters$;
  }

  constructor(private router: Router) {
    const activeUser: any = Kinvey.User.getActiveUser();
    this.user$ = new BehaviorSubject(this.parseUser(activeUser));

    this.preparePets();
    this.prepareShelters();
  }

  parseUser(kinveyUser: Kinvey.User): User | null {
    if (!kinveyUser) {
      return null;
    }

    const user: any = kinveyUser.data;
    return {
      id: user._id,
      username: user.username,
      name: user.name
    };
  }

  public async signIn(username: string, password: string): Promise<User> {
    try {
      await Kinvey.User.logout();

      const kinveyUser = await Kinvey.User.login( username, password );
      const user = this.parseUser(kinveyUser);
      this.user$.next(user);

      return user;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  public async register(username: string, password: string, name: string): Promise<User> {
    try {
      await Kinvey.User.logout();

      const kinveyUser = await Kinvey.User.signup({ username, password, name });
      const user = this.parseUser(kinveyUser);
      this.user$.next(user);

      return user;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  private handleErrors(error: Kinvey.BaseError) {
    console.error(error.message);
    return error.message;
  }

  public async logout(): Promise<any> {
    this.user$.next(null);
    await Kinvey.User.logout();

    this.router.navigate(['./login'], { clearHistory: true } as NavigationExtras);
  }

  public async resetPassword(username: string): Promise<any> {
    return Kinvey.User.resetPassword(username);
  }

  private preparePets() {
    this.petsStore = Kinvey.DataStore.collection<PetBasic>('pets');

    const userPets$ = this.currentUser.pipe(
      switchMap(user =>
        (user) ? this.petsStore.find() : of([]),
      )
    );

    userPets$.subscribe(this.pets$);
  }

  private async reloadPets() {
    const pets = await this.petsStore.find().toPromise();
    this.pets$.next(pets);
  }

  private prepareShelters() {
    this.sheltersStore = Kinvey.DataStore.collection<any>('shelters');

    const userShelters$ = this.currentUser.pipe(
      switchMap(user =>
        (user) ? this.sheltersStore.find() : of([]),
      )
    );

    userShelters$.subscribe(this.shelters$);
  }

  private async reloadShelters() {
    const shelters = await this.sheltersStore.find().toPromise();
    this.shelters$.next(shelters);
  }

  public addPetToFavourites(pet: Pet) {
    if (this.isLoggedIn()) {
      const newPet = {
        _id: pet.id,
        name: pet.name,
        img: pet.media.getFirstImage(3, assets + '/images/generic-pet.jpg')
      };

      this.petsStore.save(newPet);

      this.reloadPets();
    }
  }

  public async removePetFromFavourites(key: string) {
    if (this.isLoggedIn()) {
      await this.petsStore.removeById(key);

      this.reloadPets();
    }
  }

  public addShelterToFavourites(shelter: Shelter) {
    if (this.isLoggedIn()) {
      this.sheltersStore.save({
        _id: shelter.id,
        name: shelter.name || '',
        phone: shelter.phone || '',
        email: shelter.email || '',
      });

      this.reloadShelters();
    }
  }

  public removeShelterFromFavourites(key: string) {
    if (this.isLoggedIn()) {
      this.sheltersStore.removeById(key);

      this.reloadShelters();
    }
  }

  private isLoggedIn(): boolean {
    return (this.user$.value) ? true : false;
  }
}
