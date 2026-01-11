import {Component, input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'form-error',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './form-error.html',
  styles: ``,
})
export class FormError {

  form = input.required<FormGroup>()
  formNameSignal = input.required<string>()
  // myFormRecived = input

  // mirar si hay un error
  isValidField(fielName: string): boolean | null {
    return (this.form().controls[fielName].errors &&
      this.form().controls[fielName].touched)
  }

  getFielError(fieldName: string): string | null {
    if (!this.form().controls[fieldName]) return null

    const errors = this.form().controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return "Este campo es requerido"
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`

        case 'maxlength':
          return `Máximo de ${errors['maxlength'].requiredLength} caracteres`

        case 'min':
          return `Valos mínimo de ${errors['min'].min}`
      }

    }
    return null
  }
}
