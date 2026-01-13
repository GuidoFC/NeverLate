import {Component, inject, output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {user_worker} from '../../interface/interface-tableUser';
import {ActionButton} from '../../../shared/ui/action-button/action-button';
import {RouterLink} from '@angular/router';
import {AddUserDialog} from '../../components/users-table/user-table-dialog/add-user/add-user-dialog';
import {MatDialog} from '@angular/material/dialog';
import {DisableUser} from '../../components/users-table/user-table-dialog/disable-user/disable-user.component';
import {SelectionModel} from '@angular/cdk/collections';
import {UsersTable} from '../../../shared/table/table-user/users-table';


@Component({
  selector: 'user-page',
  imports: [
    ActionButton,
    RouterLink,
    UsersTable
  ],
  standalone: true,
  templateUrl: './user-page.html',
  styles: ``,
})
export default class UserPage {

  private userService = inject(UserService);
  readonly dialog = inject(MatDialog);
  userCreated = output<user_worker>();
  listUserDisable = output<user_worker[]>();
  selection = new SelectionModel<user_worker>(true, []);


  getAllUser(): user_worker[] {
    return this.userService.getAllUser();
  }

  createUser(newUSer: user_worker) {
    this.userService.saveUSer(newUSer);
  }

  disabledUsers(newUSer: user_worker[]) {
    this.userService.deleteUSer(newUSer);
  }

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
      if (user) {
        this.userCreated.emit(user);
      }
    });
  }

  openDialogDisableUser() {
    console.log("funciona")
    const selectedUsers = this.selection.selected;

    if (selectedUsers.length === 0) {
      // Todo avisar que no se ha seleccionado ningun usuario
      console.log("creo que se para aqui")
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
    this.selection.clear();
  }
}
