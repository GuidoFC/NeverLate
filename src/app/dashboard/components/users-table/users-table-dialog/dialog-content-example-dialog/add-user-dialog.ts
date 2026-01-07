import {Component, inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../../service/user.service';
import {TableUser} from '../../../../interface/interface-tableUser';

@Component({
  selector: 'app-dialog-content-example-dialog',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './add-user-dialog.html',
  styles: ``,
})
export class AddUserDialog {

  private fb = inject(FormBuilder)
  private userService = inject(UserService)


  myForm = this.fb.group({
    name: ['Patty', [Validators.required, Validators.minLength(3)]],
    lastName: ['Castro', Validators.required],
    secondLastName: ['saltos'],
    rol: ['Empresaria', Validators.required],
    email: ['jaja@gmail.com', [Validators.required, Validators.email]],
  });


  saveUser() {
    const newUser: TableUser = {
      id: 10,
      firstName: this.myForm.value.name!,
      lastName: this.myForm.value.lastName!,
      secondLastName: this.myForm.value.secondLastName ?? '',
      role: this.myForm.value.rol!,
      email: this.myForm.value.email!,
    };
    this.userService.saveUSer(newUser)

  }
}
