import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/app';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { tap } from 'rxjs/internal/operators/tap';
import { from } from 'rxjs/internal/observable/from';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})



export class LoginService {
    user: any;
    userSubject = new BehaviorSubject(null);
    isLogged: boolean = false;

    constructor(
        private afs: AngularFirestore,
        public auth: AngularFireAuth) {
        this.user = this.userSubject;
    }


    findUser(user): Observable<any> {
        return this.afs.collection('users').doc(user.uid).valueChanges();
    }

    createUSer() {

        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((u) => {
                let val = u.user;
                console.log(val);
                this.findUser(u.user).pipe(
                    tap(user => {
                        if (user) {
                            this.userSubject.next(user);
                        } else {
                            const client = {
                                name: val.displayName,
                                mail: val.email,
                                uid: val.uid
                            }
                            this.afs.collection('users').doc(u.user.uid).set(Object.assign({}, client));
                            this.userSubject.next(client);
                            console.log('user :', client);
                        }
                        this.isLogged = true;
                    })
                ).subscribe()
            })
    }

    logout() {
        this.auth.signOut();
    }
}