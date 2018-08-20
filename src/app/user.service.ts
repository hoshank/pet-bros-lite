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
  private _favouritePets: CacheStore<PetBasic>;
  private _favouriteShelters: CacheStore<any>;

  private _user$: BehaviorSubject<User>;
  public get user$(): Observable<User> {
    return this._user$;
  }

  /**
   * Returns a long lived Observable, which returns pets for currently logged in user
   * It will automatically switch to a new user when new user loggs in
   */
  public get favouritePets$(): Observable<PetBasic[]> {
    return this.user$.pipe(
      switchMap(user =>
        (user) ? this._favouritePets.find() : of([])
      )
    );
  }

  /**
   * Returns a long lived Observable, which returns shelters for currently logged in user
   * It will automatically switch to a new user when new user loggs in
   */
  public get favouriteShelters$(): Observable<any[]> {
    return this.user$.pipe(
      switchMap(user =>
        (user) ? this._favouriteShelters.find() : of([])
      )
    );
  }

  constructor(private router: Router) {
    this._favouritePets = Kinvey.DataStore.collection<PetBasic>('pets');
    this._favouriteShelters = Kinvey.DataStore.collection<any>('shelters');

    const user: any = Kinvey.User.getActiveUser();
    this._user$ = new BehaviorSubject(this.parseUser(user));
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

  private handleErrors(error: Kinvey.BaseError) {
    console.error(error.message);
    return error.message;
  }

  public async signIn(username: string, password: string): Promise<User> {
    try {
      await Kinvey.User.logout();

      const kinveyUser = await Kinvey.User.login( username, password );
      const user = this.parseUser(kinveyUser);
      this._user$.next(user);

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
      this._user$.next(user);

      return user;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  public async logout(): Promise<any> {
    this._user$.next(null);
    await Kinvey.User.logout();

    this.router.navigate(['./login'], { clearHistory: true } as NavigationExtras);
  }

  public async resetPassword(username: string): Promise<any> {
    return Kinvey.User.resetPassword(username);
  }

  public addPetToFavourites(pet: Pet) {
    if (this.isLoggedIn()) {
      const newPet = {
        _id: pet.id,
        name: pet.name,
        img: pet.media.getFirstImage(3, assets + '/images/generic-pet.jpg')
      };

      this._favouritePets.save(newPet);
    }
  }
  public removePetFromFavourites(key: string) {
    if (this.isLoggedIn()) {
      this._favouritePets.removeById(key);
    }
  }

  public addShelterToFavourites(shelter: Shelter) {
    if (this.isLoggedIn()) {
      this._favouriteShelters.save({
        _id: shelter.id,
        name: shelter.name || '',
        phone: shelter.phone || '',
        email: shelter.email || '',
      });
    }
  }

  public removeShelterFromFavourites(key: string) {
    if (this.isLoggedIn()) {
      this._favouriteShelters.removeById(key);
    }
  }

  private isLoggedIn(): boolean {
    return (this._user$.value) ? true : false;
  }
}
