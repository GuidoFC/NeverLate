import {Component, inject} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {TableUser} from '../../../interface/interface-tableUser';
import {FormError} from '../../../../shared/form/form-error/form-error';

@Component({
  selector: 'add-user-dialog',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, FormError],
  standalone: true,
  templateUrl: './add-user-dialog.html',
  styles: ``,
})
export class AddUserDialog {

  private fb = inject(FormBuilder)
// Inyecto la referencia al diálogo que Angular Material ha abierto.
// Me permite cerrar este diálogo y devolver datos al componente que lo abrió.
// Decimos el tipo de dato de devuelve este dialogo, en este caso TableUser
  private dialogRef = inject(MatDialogRef<AddUserDialog, TableUser>);

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    secondLastName: ['', Validators.maxLength(20)],
    rol: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
  });


  saveUser() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()

      return
    }
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
