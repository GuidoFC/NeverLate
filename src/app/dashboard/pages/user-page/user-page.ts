import {Component, inject} from '@angular/core';
import {UserService} from '../../service/user.service';
import {user_worker} from '../../interface/interface-tableUser';
import {SelectionModel} from '@angular/cdk/collections';
import {UsersTable} from '../../../shared/table/table-user/users-table';
import {UsersToolbar} from '../../components/users-toolbar/users-toolbar';


@Component({
  selector: 'user-page',
  imports: [
    UsersTable,
    UsersToolbar
  ],
  standalone: true,
  templateUrl: './user-page.html',
  styles: ``,
})
export default class UserPage {

  private userService = inject(UserService);
  usersSelected = new SelectionModel<user_worker>(true, []);


  getAllUser(): user_worker[] {
    return this.userService.getAllUser();
  }

  createUser(newUSer: user_worker) {
    this.userService.saveUSer(newUSer);
  }

  disabledUsers(newUSer: user_worker[]) {
    this.userService.deleteUSer(newUSer);
  }



}
