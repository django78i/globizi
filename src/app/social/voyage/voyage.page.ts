import { LoginService } from './../../services/login.services';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import SwiperCore from 'swiper/core';
@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.page.html',
  styleUrls: ['./voyage.page.scss'],
})
export class VoyagePage implements OnInit {

  slideOpts = {
    slidesPerView: 1.2,
    spaceBetween : 20,
    // navigation : true,
  };

  slidesPerView: any;
  spaceBetween: any;

  latitude: number = 48.776731;
  longitude: number = 2.001844;
  marker: {
    latitude: number,
    longitude: number,
    draggable: true
  };

  test: any[] = [
    {
      photo: "https://i.pinimg.com/originals/e0/da/a8/e0daa8b8ee32dda6229930034c100117.jpg",
      name: "Sunset Blvrd",
      position: "Bordeaux-France ",
      note: 4
    },
    {
      photo: "https://i.pinimg.com/originals/e0/da/a8/e0daa8b8ee32dda6229930034c100117.jpg",
      name: "Sunset Blvrd",
      position: "Bordeaux-France ",
      note: 4
    },
    {
      photo: "https://i.pinimg.com/originals/e0/da/a8/e0daa8b8ee32dda6229930034c100117.jpg",
      name: "Sunset Blvrd",
      position: "Bordeaux-France ",
      note: 4
    },
    {
      photo: "https://i.pinimg.com/originals/e0/da/a8/e0daa8b8ee32dda6229930034c100117.jpg",
      name: "Sunset Blvrd",
      position: "Bordeaux-France ",
      note: 4
    }
  ]

  constructor(public lgs: LoginService, public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
  }



  logout() {
    console.log('lo');
    this.lgs.logout();
  }

  onMapClicked($event) {
    this.marker = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
      draggable: true
    };
  }

  navigate() {
    this.router.navigate(['tabs/voyage/map']);
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
