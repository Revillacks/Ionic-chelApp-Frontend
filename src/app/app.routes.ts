import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then( m => m.HomePage)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.page').then( m => m.RegisterPage)
  },  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then( m => m.ProductsPage)
  },

];
