import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-product-image',
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css'
})
export class ProductImageComponent {
  @Input({ required: true }) src = '';
  @Input({ required: true }) alt = '';
  @Input() variant: 'card' | 'detail' = 'card';
  @Input() width = 600;
  @Input() height = 450;
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() fetchpriority: 'high' | 'low' | 'auto' = 'auto';
  orientation: 'portrait' | 'landscape' | 'square' = 'landscape';

  get classes(): string {
    return `product-image product-image-${this.variant} is-${this.orientation}`;
  }

  onLoad(event: Event): void {
    const image = event.target as HTMLImageElement | null;
    if (!image) {
      return;
    }

    if (image.naturalHeight > image.naturalWidth) {
      this.orientation = 'portrait';
      return;
    }

    if (image.naturalHeight === image.naturalWidth) {
      this.orientation = 'square';
      return;
    }

    this.orientation = 'landscape';
  }
}
