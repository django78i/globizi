import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoyagePage } from './voyage.page';

const routes: Routes = [
	{
		path: '',
		component: VoyagePage,
	},
	{
		path: 'map',
		children: [
			{
				path: '',
				loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
			}
		]
	},
	{
		path: '',
		redirectTo: '/map',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)	],
	exports: [RouterModule],
})
export class VoyagePageRoutingModule { }
