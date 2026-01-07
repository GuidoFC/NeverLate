// import { Component } from '@angular/core';

import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddUserDialog} from './dialog-content-example-dialog/add-user-dialog';

@Component({
  selector: 'user-table-botton-add-user',
  imports: [],
  standalone: true,
  templateUrl: './user-table-button-add-user.component.html',
  styles: ``,
})
export class UserTableButtonAddUserComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AddUserDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
