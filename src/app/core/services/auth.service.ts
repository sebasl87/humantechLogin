import { Injectable } from '@angular/core';

import { UserI } from '../interfaces/interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
    public platform: Platform,
    private storage: Storage) {

    afAuth.authState.subscribe(user => (this.isLogged = user));

  }

  //REGISTRARSE

  onRegister(email, password, name) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid;
        this.db.collection('user').doc(uid).set({
          name: name,
          uid: uid
        })
        resolve(res);

      }).catch(err => reject(err))
    })
  }


  //LOGUEARSE

  onLogin(user: UserI) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(user.email, user.password).then(user => {
        resolve(user);
      }).catch(err => reject(err));
    });
  }


  createFirebaseuser(appleResponse) {
    // Create a custom OAuth provider    
    const provider = new auth.OAuthProvider('apple.com');

    // Create sign in credentials with our token
    const credential = provider.credential({
      idToken: appleResponse.identityToken
    });

    // Call the sign in with our created credentials

    return this.afAuth.signInWithCredential(credential);
  }

  //DATOS USER HOME

  getUserAuth() {
    return this.afAuth.authState
  }

  //LOGOUT

  logout() {
    this.afAuth.signOut().then(() => {
      this.storage.clear();
      this.router.navigateByUrl('/');
    })
  }

  //RESET PASS

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
