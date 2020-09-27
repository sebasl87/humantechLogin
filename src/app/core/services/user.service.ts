import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserI, acompI, autoI } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { firestore, storage } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) {
  }
  private userCollection: AngularFirestoreCollection<UserI>;
  private users: Observable<UserI[]>;
  private userDoc: AngularFirestoreDocument<UserI>;
  private user: Observable<UserI>;

  public selectedUser: UserI = {};
  public selectedAcomp: acompI = {};


  getOneUser(idUser: string) {
    this.userDoc = this.db.doc<UserI>(`user/${idUser}`);
    return this.user = this.userDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        this.db.collection('user').doc(idUser).set({
          uid: idUser
        })
        return null;
      } else {
        const data = action.payload.data() as UserI;
        data.uid = action.payload.id;
        return data
      }
    }));
  }

  
  addUser(user: UserI): void {
    let uid = user.uid;
    this.db.collection('user').doc(`${uid}`).set(user);
    this.db.collection('user').doc(`${uid}`).update({
      delete: false
    });

  }

  addUserIos(user): void {
    let uid = user.uid;
    this.db.collection('user').doc(`${uid}`).set(user);
    this.db.collection('user').doc(`${uid}`).update({
      delete: false
    });

  }

}
