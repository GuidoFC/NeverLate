import {Routes} from '@angular/router';
import {DashboardLayout} from './dashboard/layout/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: 'user',
        children: [
          {
            path: '',
            loadComponent: () => import('./dashboard/pages/user-page/user-page'),
          },
          {
            path: 'disabled',
            loadComponent: () =>
              import('./dashboard/pages/disable-user-page/disable-user-page'),
          }
        ]
      },
      {
        path: 'client',
        loadComponent: () => import('./dashboard/pages/cliente-page/cliente-page'),
      },
      {
        path: '**',
        redirectTo: 'user'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
