import {Component, Inject, inject} from '@angular/core';
import {user_worker} from '../../../../interface/interface-tableUser';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'disable-user',
  imports: [
    MatListModule,
    MatDialogActions
  ],
  standalone: true,
  templateUrl: './disable-user.component.html',
  styles: ``,
})
export class DisableUser {
  // Tengo los usuarios que he pasado al dialogo
  users = inject<user_worker[]>(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<DisableUser, user_worker>);


  disableUsers() {
    console.log("que data tengo: ", this.users)
    this.dialogRef.close(this.users);
  }

}
