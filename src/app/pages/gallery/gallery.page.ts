import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { PRODUCTS } from '../../data/products.mock';
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
      src: product.images[0],
      alt: `Foto de ${product.name}`
    })),
    { src: 'https://picsum.photos/seed/galeria-extra-1/1200/1200', alt: 'Caja de postres decorados' },
    { src: 'https://picsum.photos/seed/galeria-extra-2/1200/1200', alt: 'Torta personalizada para evento' },
    { src: 'https://picsum.photos/seed/galeria-extra-3/1200/1200', alt: 'Detalle dulce para regalo' }
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
