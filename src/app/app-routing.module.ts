import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children:[
      {
      path:"",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path:"index",
        loadChildren: () => import('./home/index/index.module').then( m => m.IndexPageModule)
      }
      // },
      // {
      //   path:"index/:id",
      //   loadChildren: () => import('./home/index/index.module').then( m => m.IndexPageModule)
      // }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./modules/pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
