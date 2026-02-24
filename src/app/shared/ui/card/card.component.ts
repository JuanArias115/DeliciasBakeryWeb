import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() hoverable = true;
  @Input() padded = true;

  get classes(): string {
    return [
      'card',
      this.hoverable ? 'card-hoverable' : '',
      this.padded ? 'card-padded' : ''
    ]
      .filter(Boolean)
      .join(' ');
  }
}
