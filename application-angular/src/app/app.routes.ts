import { Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'login',
    loadChildren: () => import('./pages/general/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  { path: '**', component: NotFoundComponent }
];
