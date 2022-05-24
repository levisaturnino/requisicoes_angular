import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
  }

   authUser(): Observable<firebase.User | null> {
    return this.user;
  }

   login(email: string, senha: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, senha);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

}
