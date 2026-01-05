import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-dashboard-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true,
  templateUrl: './dashboard-side-menu-options.html',
  styles: ``,
})
export class DashboardSideMenuOptions {

  menuOption: menuOption[] = [{
    icon: 'fa-solid fa-user',
    label: 'Usuario',
    route: '/dashboard/user'
  }]
}
