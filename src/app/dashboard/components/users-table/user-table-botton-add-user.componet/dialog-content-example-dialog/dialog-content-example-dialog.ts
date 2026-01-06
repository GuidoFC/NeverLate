import {Component, inject} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dialog-content-example-dialog',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './dialog-content-example-dialog.html',
  styles: ``,
})
export class DialogContentExampleDialog {

  private fb = inject(FormBuilder)

  myForm = this.fb.group({
    name: [''],
    lastName: [''],
    secondLastName: [''],
    rol: [''],
    email: [''],
  })
}
