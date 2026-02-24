import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-button',
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' = 'md';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() href?: string;
  @Input() target: '_self' | '_blank' = '_self';
  @Input() routerLink?: string;

  get classes(): string {
    return `btn btn-${this.variant} btn-${this.size}`;
  }
}
