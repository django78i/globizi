import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefPage } from './pref.page';

const routes: Routes = [
    {
        path: '',
        component: PrefPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrefPageRoutingModule { }
