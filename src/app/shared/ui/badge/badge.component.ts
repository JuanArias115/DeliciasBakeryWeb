import { Component, Input } from '@angular/core';

import { IconComponent, IconName } from '../icon/icon.component';

@Component({
  selector: 'ui-badge',
  imports: [IconComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  @Input() tone: 'primary' | 'neutral' = 'primary';
  @Input() icon: IconName | '' = 'tag';

  get classes(): string {
    return `badge badge-${this.tone}`;
  }
}
