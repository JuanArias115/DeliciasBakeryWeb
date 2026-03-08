import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { PRODUCTS } from '../../data/products.mock';
import { CLOUDINARY_WIDTHS, cldImage, cldSized } from '../../lib/cloudinary';
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
    ...PRODUCTS.slice(0, 8).map((product) => ({
      src: cldSized(product.images[0], CLOUDINARY_WIDTHS.detail),
      alt: `Foto de ${product.name}`
    })),
    {
      src: cldImage('deliciasbakery/galeria/caja-postres-decorados-1', { width: CLOUDINARY_WIDTHS.detail }),
      alt: 'Caja de postres decorados'
    },
    {
      src: cldImage('deliciasbakery/galeria/torta-personalizada-evento-1', { width: CLOUDINARY_WIDTHS.detail }),
      alt: 'Torta personalizada para evento'
    },
    {
      src: cldImage('deliciasbakery/galeria/detalle-dulce-regalo-1', { width: CLOUDINARY_WIDTHS.detail }),
      alt: 'Detalle dulce para regalo'
    }
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
