import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {user_worker} from '../../../interface/interface-tableUser';

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
    this.dialogRef.close(this.users);
  }

}
