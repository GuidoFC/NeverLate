// import { Component } from '@angular/core';

import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialog} from './dialog-content-example-dialog/dialog-content-example-dialog';

@Component({
  selector: 'user-table-botton-add-user',
  imports: [],
  standalone: true,
  templateUrl: './user-table-botton-add-user.componet.html',
  styles: ``,
})
export class UserTableBottonAddUserComponet {

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
