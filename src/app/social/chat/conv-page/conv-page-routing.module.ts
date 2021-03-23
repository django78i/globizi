import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvPagePage } from './conv-page.page';

const routes: Routes = [
  {
    path: '',
    component: ConvPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvPagePageRoutingModule {}
