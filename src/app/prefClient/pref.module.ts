import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PrefPageRoutingModule } from './pref-routing.module';
import { PrefPage } from './pref.page';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefPageRoutingModule,
    MatStepperModule,
    MatExpansionModule
  ],
  declarations: [PrefPage]
})
export class PrefPageModule {}
