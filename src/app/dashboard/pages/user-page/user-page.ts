import {Component, inject} from '@angular/core';
import {UsersTableComponent} from '../../components/users-table/users-table.component';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'user-page',
  imports: [
    UsersTableComponent
  ],
  standalone: true,
  templateUrl: './user-page.html',
  styles: ``,
})
export default class UserPage {

  public userService = inject(UserService);
}
