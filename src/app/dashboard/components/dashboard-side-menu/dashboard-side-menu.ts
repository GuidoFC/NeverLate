import { Component } from '@angular/core';
import {DashboardSideMenuOptions} from './dashboard-side-menu-options/dashboard-side-menu-options';

@Component({
  selector: 'dashboard-side-menu',
  imports: [
    DashboardSideMenuOptions
  ],
  standalone: true,
  templateUrl: './dashboard-side-menu.html',
  styles: ``,
})
export class DashboardSideMenu {

}
