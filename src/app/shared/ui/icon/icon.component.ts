import { Component, HostBinding, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight,
  faCalendarDays,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
  faPhone,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export type IconName =
  | 'whatsapp'
  | 'phone'
  | 'arrow-right'
  | 'arrow-left'
  | 'cart'
  | 'tag'
  | 'search'
  | 'calendar'
  | 'location';

const ICON_MAP: Record<IconName, IconDefinition> = {
  whatsapp: faWhatsapp,
  phone: faPhone,
  'arrow-right': faArrowRight,
  'arrow-left': faArrowLeft,
  cart: faCartShopping,
  tag: faTag,
  search: faMagnifyingGlass,
  calendar: faCalendarDays,
  location: faLocationDot
};

@Component({
  selector: 'ui-icon',
  imports: [FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size: 'sm' | 'md' | 'lg' | number = 'md';
  @Input() decorative = true;
  @Input() ariaLabel = '';

  get pixelSize(): number {
    if (typeof this.size === 'number') {
      return this.size;
    }

    if (this.size === 'sm') {
      return 16;
    }

    if (this.size === 'lg') {
      return 24;
    }

    return 18;
  }

  @HostBinding('style.font-size.px')
  get hostFontSize(): number {
    return this.pixelSize;
  }

  get iconDefinition(): IconDefinition {
    return ICON_MAP[this.name];
  }

  get computedAriaLabel(): string | null {
    if (this.decorative) {
      return null;
    }

    return this.ariaLabel || this.name;
  }
}
