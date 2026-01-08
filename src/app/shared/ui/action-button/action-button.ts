import {Component, input, output} from '@angular/core';

@Component({
  selector: 'action-button',
  imports: [],
  standalone: true,
  templateUrl: './action-button.html',
  styles: ``,
})
export class ActionButton {

  title = input.required<string>()
  enviarSenal = output<void>();

  onClick(): void {
    this.enviarSenal.emit();
  }
}
