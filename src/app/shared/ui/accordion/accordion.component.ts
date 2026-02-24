import { Component, Input, signal } from '@angular/core';

import { FaqItem } from '../../../models/faq.model';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input({ required: true }) items: FaqItem[] = [];

  readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
