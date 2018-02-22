import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  voted?: boolean;
}

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })
    ;
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.authLogin(provider);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  private authLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(({user}) => this.updateUser(user))
      .catch(err => console.log(err));
  }

  private updateUser(user) {
    const {uid, email, displayName, photoURL} = user;
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {uid, email, displayName, photoURL};

    return userRef.set(data, {merge: true});
  }
}
