import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./menu/menu.page').then((m) => m.MenuPage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full',
  }


];
