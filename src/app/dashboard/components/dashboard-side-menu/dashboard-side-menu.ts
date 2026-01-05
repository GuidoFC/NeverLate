import { Component } from '@angular/core';
import {DashboardSideMenuOptions} from './dashboard-side-menu-options/dashboard-side-menu-options';
import {DashboardSideMenuHeader} from './dashboard-side-menu-header/dashboard-side-menu-header';

@Component({
  selector: 'dashboard-side-menu',
  imports: [
    DashboardSideMenuOptions,
    DashboardSideMenuHeader
  ],
  standalone: true,
  templateUrl: './dashboard-side-menu.html',
  styles: ``,
})
export class DashboardSideMenu {

}
