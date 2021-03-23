import { PrefPageModule } from './prefClient/pref.module';
import { SocialPageModule } from './social/social.module';
import { LoginPageModule } from './login/login.module';
import { LoginPage } from './login/login';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { LoginService } from './services/login.services';
import { AngularFireModule } from '@angular/fire';
// // import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrefPage } from './prefClient/pref.page';
import { AgmCoreModule } from '@agm/core';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    LoginPage,
    PrefPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    LoginPageModule,
    SocialPageModule,
    PrefPageModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBY3yru7c1Oyy8B8iMEAuYcCgiZwPwisnA', libraries: ['places'] }),
    // GooglePlaceModule,
    SwiperModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    LoginService,
    // AngularFireDatabase,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {


}
