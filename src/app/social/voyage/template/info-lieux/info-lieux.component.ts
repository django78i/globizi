import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-lieux',
  templateUrl: './info-lieux.component.html',
  styleUrls: ['./info-lieux.component.scss'],
})
export class InfoLieuxComponent implements OnInit {

  @Input() lieux :any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
