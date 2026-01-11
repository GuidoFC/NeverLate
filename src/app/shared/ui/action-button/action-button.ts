import {Component, input, output} from '@angular/core';
import {BUTTON_COLOR_CLASSES, ButtonColor} from './action-button.styles';

@Component({
  selector: 'action-button',
  imports: [],
  standalone: true,
  templateUrl: './action-button.html',
  styles: ``,
})
export class ActionButton {

  title = input.required<string>()
  colorButton = input.required<ButtonColor>()
  enviarSenal = output<void>();

  onClick(): void {
    this.enviarSenal.emit();
  }

  chooseColorButton(): string {
    return BUTTON_COLOR_CLASSES[this.colorButton()];
  }
}
