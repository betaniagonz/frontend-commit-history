import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent),
    children:[
      {
        path: '',
        redirectTo: 'information',
        pathMatch: 'full'
      },
      {
        path: 'information',
        loadComponent: () => import('./repo-information/repo-information.component').then(m => m.RepoInformationComponent)
      }
    ]
  }
];
