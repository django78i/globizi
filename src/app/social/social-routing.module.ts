import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialPage } from './social.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: SocialPage,
        children: [
            {
                path: 'voyage',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./voyage/voyage.module').then(m => m.VoyagePageModule)
                    }
                ]
            },
            {
                path: 'chat',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/chat',
        pathMatch: 'full'
    },
//   {
//     path: 'voyage',
//     loadChildren: () => import('./voyage/voyage.module').then( m => m.VoyagePageModule)
//   },
//   {
//     path: 'chat',
//     loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
//   }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class SocialRoutingModule { }
