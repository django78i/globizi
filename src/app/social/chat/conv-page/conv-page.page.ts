import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conv-page',
  templateUrl: './conv-page.page.html',
  styleUrls: ['./conv-page.page.scss'],
})
export class ConvPagePage implements OnInit {

  constructor(private navCtl: NavController) { }

  ngOnInit() {
  }

  nav() {
    this.navCtl.navigateBack(['']);
  }

}
