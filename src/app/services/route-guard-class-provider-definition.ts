import { tap } from 'rxjs/internal/operators/tap';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { LoginService } from './login.services';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class MyRouteGuardService implements CanActivate {
    constructor(
        private lgs: LoginService,
        private router: Router,
        private auth: AngularFireAuth, public navCtrl: NavController
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log('ici');
        // isLoggedIn method is a getter returning a boolean
        return new Promise((resolve, reject) => {
            this.auth.onAuthStateChanged((user) => {
                if (user) {
                    resolve(true);
                } else {
                    console.log('User is not logged in');
                    this.router.navigate(['/home']);
                    resolve(false);
                }
            });
        });
    }


}

