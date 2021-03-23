import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvPagePageRoutingModule } from './conv-page-routing.module';

import { ConvPagePage } from './conv-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvPagePageRoutingModule
  ],
  declarations: [ConvPagePage]
})
export class ConvPagePageModule {}
