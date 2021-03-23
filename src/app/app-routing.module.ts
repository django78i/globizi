import { MyRouteGuardService } from './services/route-guard-class-provider-definition';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [MyRouteGuardService],
    loadChildren: () => import('./social/social.module').then(m => m.SocialPageModule)
  },
  {
    path: 'home',
    // canActivate: [MyRouteGuardService],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'preference',
    // canActivate: [MyRouteGuardService],
    loadChildren: () => import('./prefClient/pref.module').then(m => m.PrefPageModule)
  },

  {
    path: 'social',
    redirectTo: 'social',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [MyRouteGuardService]
})
export class AppRoutingModule { }
