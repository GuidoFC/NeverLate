import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardSideMenu} from '../../components/dashboard-side-menu/dashboard-side-menu';

@Component({
  selector: 'main-layout',
  imports: [
    RouterOutlet,
    DashboardSideMenu
  ],
  standalone: true,
  templateUrl: './dashboard-layout.html',
  styles: ``,
})
export class DashboardLayout {

}
