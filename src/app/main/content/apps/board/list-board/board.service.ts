import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
