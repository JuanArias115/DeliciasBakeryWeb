import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent, IconName } from '../icon/icon.component';

@Component({
  selector: 'ui-button',
  imports: [RouterLink, IconComponent],
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
  @Input() iconLeft?: IconName;
  @Input() iconRight?: IconName;
  @Input() iconSize?: 'sm' | 'md' | 'lg' | number;

  get classes(): string {
    return `btn btn-${this.variant} btn-${this.size}`;
  }

  get resolvedIconSize(): 'sm' | 'md' | 'lg' | number {
    if (this.iconSize) {
      return this.iconSize;
    }

    return this.size === 'sm' ? 'sm' : 'md';
  }
}
