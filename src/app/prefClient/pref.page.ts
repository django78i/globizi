import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavController, LoadingController, ModalController } from '@ionic/angular';


@Component({
    selector: 'app-pref',
    templateUrl: 'pref.page.html',
    styleUrls: ['pref.page.scss'],
})
export class PrefPage implements OnInit, AfterViewInit {
    @ViewChildren('clicker') counters: QueryList<ElementRef>;
    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    photos: any[] = ['1', '2', '3', '4'];

    slideOpts = {
        slidesPerView: 'auto',
    }

    constructor(public navCtrl: NavController, private elem: ElementRef,
        public loadingController: LoadingController, public modalController: ModalController) {
        console.log('preference');
    }


    ngOnInit() {

    }

    ngAfterViewInit() {
        this.counters.forEach((u, i) => {
            if (i == 0) {
                console.log(i);
                u.nativeElement.classList.add('clickers');
            }
        });
    }


    select(i) {
        console.log('ici :', i);
        this.counters.forEach((u, index) => {
            u.nativeElement.classList.remove('clickers');
            if (i == index) {
                u.nativeElement.classList.add('clickers');
            }
        });
    }

    async valider() {

        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Patientez...',
            duration: 1000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
        this.navCtrl.navigateForward(['']);
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }



}
