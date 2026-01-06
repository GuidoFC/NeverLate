import {Component} from '@angular/core';
import {UsersTableComponent} from '../../components/users-table/users-table.component';

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

}
