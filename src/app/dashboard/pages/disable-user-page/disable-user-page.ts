import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UsersTable} from '../../../shared/table/table-user/users-table';
import {DisableUsers} from '../../service/disable-users';

@Component({
  selector: 'app-disable-user-page',
  imports: [
    RouterLink,
    UsersTable
  ],
  standalone: true,
  templateUrl: './disable-user-page.html',
  styles: ``,
})
export default class DisableUserPage {

  public disableSserService = inject(DisableUsers);

}
