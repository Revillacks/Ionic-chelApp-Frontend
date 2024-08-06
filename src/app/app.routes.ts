// import { Routes } from '@angular/router';
// import { Tab1Page } from './tab1/tab1.page';
// import { Tab2Page } from './tab2/tab2.page';
// import { Tab3Page } from './tab3/tab3.page';
// import { TabsPage } from './tabs/tabs.page';

// export const routes: Routes = [
//   {
//     path: 'tabs', component:TabsPage
//     // children: [
//     //   { path: 'tab1', component: Tab1Page },
//     //   { path: 'tab2', component: Tab2Page },
//     //   { path: 'tab3', component: Tab3Page },
//     //   { path: '', redirectTo: 'tab1', pathMatch: 'full' }
//     // ]
//   },
//   { path: '', redirectTo: '/tabs/tab3', pathMatch: 'full' }
// ];


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

];

