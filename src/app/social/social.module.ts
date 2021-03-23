import { HomePageModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { SocialPage } from './social.page';
import { SocialRoutingModule } from './social-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialRoutingModule,
    MatStepperModule,
    MatExpansionModule,
    HomePageModule
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
