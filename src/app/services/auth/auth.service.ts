import { AngularFireAuth } from '@angular/fire/compat/auth';

import { BehaviorSubject, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/compat/app';
import { User } from '@angular/fire/auth/firebase';
// import { User } from '@angular/fire/auth';
// import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Observable<firebase.default.User> = {} as Observable<firebase.default.User>;
  user$: Observable<firebase.default.User> | null = this.user;

  // user$ = this.user
  //   .asObservable()
  //   .pipe(switchMap((user: Observable<firebase.default.User>) => user));

  constructor(private afAuth: AngularFireAuth) {
    // this.user.next();
  }

  loginViaGoogle(): Observable<firebase.default.auth.UserCredential> {
    return from(this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()));
  }

  logout(): Observable<any> {
    return from(this.afAuth.signOut());
  }
}