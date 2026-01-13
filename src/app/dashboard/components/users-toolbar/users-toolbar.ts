import {Component, inject, input, output} from '@angular/core';
import {ActionButton} from '../../../shared/ui/action-button/action-button';
import {AddUserDialog} from '../dialogs/add-user-dialog/add-user-dialog';
import {MatDialog} from '@angular/material/dialog';
import {user_worker} from '../../interface/interface-tableUser';
import {RouterLink} from '@angular/router';
import {DisableUser} from '../dialogs/disable-user-dialog/disable-user.component';
import {SelectionModel} from '@angular/cdk/collections';



@Component({
  selector: 'users-toolbar',
  imports: [
    ActionButton,
    RouterLink
  ],
  standalone:true,
  templateUrl: './users-toolbar.html',
  styles: ``,
})
export class UsersToolbar {

  readonly dialog = inject(MatDialog);
  userCreated = output<user_worker>();
  listUserDisable = output<user_worker[]>();

  selectedUsers = input.required<SelectionModel<user_worker>>();



  openDialogCreateUser() {
    // Abro el componente AddUserDialog y lo muestro como un diálogo.
    const dialogRef = this.dialog.open(AddUserDialog, {
      width: '90vw',
      maxWidth: '520px',
      maxHeight: '90vh',
      panelClass: 'responsive-dialog',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(user => {
      // hacer comprobaciones antes de guardar
      // guardar los datos en el servicio de USUARIO
      console.log(user)
      if (user) {
        this.userCreated.emit(user);
      }
    });
  }

  openDialogDisableUser() {
    const selectedUsers = this.selectedUsers().selected;

    if (selectedUsers.length === 0) {
      // Todo avisar que no se ha seleccionado ningun usuario
      return;
    }

    const dialogRef = this.dialog.open(DisableUser, {
      width: '90vw',
      maxWidth: '520px',
      maxHeight: '90vh',
      panelClass: 'responsive-dialog',
      disableClose: true,
      data: selectedUsers,
    });

    dialogRef.afterClosed().subscribe(listUser => {
      if (listUser) {
        this.listUserDisable.emit(listUser);
      }
    });
    // limpiar selección
    this.selectedUsers().clear();
  }

}
