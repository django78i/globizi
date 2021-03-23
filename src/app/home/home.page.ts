import { LoginPage } from './../login/login';
import { LoginService } from './../services/login.services';
import { Component, AfterViewInit, NgZone } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

	slideOpts = {
		initialSlide: 0,
		speed: 400
	};

	google: any = "../../assets/icon/googleIcon.svg";
	fleche: any = "../../assets/icon/fleche.svg";

	constructor(public navCtrl: NavController, public lgs: LoginService,
		public auth: AngularFireAuth, private router: Router,
		public modalController: ModalController, public ngZone: NgZone) {
	}

	ngAfterViewInit() {
		this.presentModal();

	}

	async presentModal() {
		console.log('ini');

		const modal = await this.modalController.create({
			component: LoginPage,
			// cssClass: 'my-custom-class'
		});
		return await modal.present();
	}


	decoll() {
		this.navCtrl.navigateForward(['/preference']);
	}

	logout() {
		this.lgs.logout();
	}


}
