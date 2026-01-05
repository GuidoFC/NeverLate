import {Routes} from '@angular/router';
import {DashboardLayout} from './dashboard/layout/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: 'user',
        loadComponent: () => import('./dashboard/pages/user-page/user-page'),
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
