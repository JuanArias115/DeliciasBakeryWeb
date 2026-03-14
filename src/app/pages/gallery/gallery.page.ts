import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { PRODUCTS } from '../../data/products.mock';
import { CLOUDINARY_WIDTHS, cldSized } from '../../lib/cloudinary';
import { CardComponent } from '../../shared/ui/card/card.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

interface GalleryItem {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery-page',
  imports: [CardComponent, SectionTitleComponent],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.css'
})
export default class GalleryPage implements OnInit, OnDestroy {
  readonly loading = signal(true);
  readonly skeletonItems = Array.from({ length: 9 }, (_, index) => index);

  readonly items: GalleryItem[] = [
    ...PRODUCTS.map((product) => ({
      src: cldSized(product.images[0], CLOUDINARY_WIDTHS.detail),
      alt: `Foto de ${product.name}`
    }))
  ];

  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.timer = setTimeout(() => this.loading.set(false), 700);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
