import {Component, inject} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {TableUser} from '../../../interface/interface-tableUser';

@Component({
  selector: 'app-dialog-content-example-dialog',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './add-user-dialog.html',
  styles: ``,
})
export class AddUserDialog {

  private fb = inject(FormBuilder)
// Inyecto la referencia al diálogo que Angular Material ha abierto.
// Me permite cerrar este diálogo y devolver datos al componente que lo abrió.
  private dialogRef = inject(MatDialogRef<AddUserDialog>);

  myForm = this.fb.group({
    name: ['Patty', [Validators.required, Validators.minLength(3)]],
    lastName: ['Castro', Validators.required],
    secondLastName: ['saltos'],
    rol: ['Empresaria', Validators.required],
    email: ['jaja@gmail.com', [Validators.required, Validators.email]],
  });


  saveUser() {
    if (this.myForm.invalid) return;
    // TODO en el formuario tengo que avisar antes de que de guardar
    // si hay algun error, especificar cual es el error para ofrecer
    // una mejor experiencia de usaurio
    const newUser: TableUser = {
      id: 10,
      firstName: this.myForm.value.name!,
      lastName: this.myForm.value.lastName!,
      secondLastName: this.myForm.value.secondLastName ?? '',
      role: this.myForm.value.rol!,
      email: this.myForm.value.email!,
    };
    // Cierra este diálogo y devuelve newUser al componente que abrio este dialogo
    this.dialogRef.close(newUser);

  }

}
