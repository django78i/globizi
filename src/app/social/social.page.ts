import { LoginService } from './../services/login.services';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-social',
    templateUrl: 'social.page.html',
    styleUrls: ['social.page.scss'],
})
export class SocialPage implements OnInit {

    constructor(public navCtrl: NavController, private elem: ElementRef, public lgs: LoginService,
        public router: Router) {

    }


    ngOnInit() {

    }

    // logout() {
    //     console.log('déco');
    //     this.router.navigate(['/home']);
    //     this.lgs.logout();
    // }


}
