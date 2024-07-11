import { Routes } from '@angular/router';
import { HomeComponent } from './features/views/home/home.component';
import { DetailComponent } from './features/views/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Linx Brewery - Home'
  },
  {
    path: 'details/:id',
    loadComponent: () => import('../app/features/views/detail/detail.component').then(m =>  m.DetailComponent),
    title: 'Linx Brewery - Detail'
  }
];
