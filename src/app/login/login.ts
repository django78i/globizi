import { tap } from 'rxjs/internal/operators/tap';
import { LoginService } from './../services/login.services';
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PrefPage } from '../prefClient/pref.page';


@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage {

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    google: any = "../../assets/icon/googleIcon.svg";
    fleche: any = "../../assets/icon/fleche.svg";

    constructor(public navCtrl: NavController, public lgs: LoginService,
        public auth: AngularFireAuth, public modalController: ModalController, public loadingController: LoadingController) { }

    signInWithGoogle() {
        this.lgs.createUSer();
        this.auth.onAuthStateChanged(u => {
            if (u) {
                this.presentLoading()
                    .then(u => this.dismiss())
            }
        })
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Patientez...',
            duration: 1000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
    }



}
