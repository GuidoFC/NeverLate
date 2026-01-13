import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ShareUsersTable} from '../../../shared/table/table-user/share-users-table';
import {UserService} from '../../service/user.service';
import {DisableUsers} from '../../service/disable-users';

@Component({
  selector: 'app-disable-user-page',
  imports: [
    RouterLink,
    ShareUsersTable
  ],
  standalone: true,
  templateUrl: './disable-user-page.html',
  styles: ``,
})
export default class DisableUserPage {

  public disableSserService = inject(DisableUsers);

}
