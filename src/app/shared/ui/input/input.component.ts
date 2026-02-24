import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({ required: true }) id = '';
  @Input({ required: true }) label = '';
  @Input({ required: true }) control!: FormControl<string>;
  @Input() type: 'text' | 'tel' | 'date' = 'text';
  @Input() placeholder = '';
  @Input() multiline = false;
  @Input() rows = 4;

  get errorMessage(): string {
    if (!this.control.errors || !this.control.touched) {
      return '';
    }

    if (this.control.errors['required']) {
      return 'Este campo es obligatorio.';
    }

    if (this.control.errors['minlength']) {
      return `Minimo ${this.control.errors['minlength'].requiredLength} caracteres.`;
    }

    if (this.control.errors['pattern']) {
      return 'Formato invalido.';
    }

    return 'Revisa este campo.';
  }
}
