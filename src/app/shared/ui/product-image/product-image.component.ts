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
  @Input() frame: 'default' | 'portrait' = 'default';
  @Input() fit: 'cover' | 'contain' | null = null;
  @Input() objectPosition = '';
  @Input() forceCover = false;
  @Input() width = 600;
  @Input() height = 450;
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() fetchpriority: 'high' | 'low' | 'auto' = 'auto';
  orientation: 'portrait' | 'landscape' | 'square' = 'landscape';

  get classes(): string {
    const forceCoverClass = this.forceCover ? ' force-cover' : '';
    const fitClass = ` fit-${this.fit ?? 'auto'}`;
    return `product-image product-image-${this.variant} is-${this.orientation} frame-${this.frame}${fitClass}${forceCoverClass}`;
  }

  get imageStyle(): Record<string, string> {
    return {
      '--product-image-fit': this.fit ?? '',
      '--product-image-position': this.objectPosition
    };
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
