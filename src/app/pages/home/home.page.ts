import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { siteConfig } from '../../core/config/site.config';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { FAQS } from '../../data/faqs.mock';
import { PRODUCTS } from '../../data/products.mock';
import { REVIEWS } from '../../data/reviews.mock';
import { Product } from '../../models/product.model';
import { AccordionComponent } from '../../shared/ui/accordion/accordion.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    CurrencyPipe,
    DatePipe,
    ButtonComponent,
    CardComponent,
    BadgeComponent,
    SectionTitleComponent,
    AccordionComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export default class HomePage {
  readonly featuredProducts = PRODUCTS.filter((product) => product.featured).slice(0, 6);
  readonly steps = siteConfig.orderSteps;
  readonly reviews = REVIEWS;
  readonly faqs = FAQS;
  readonly config = siteConfig;

  readonly activeReview = signal(0);

  constructor(
    private readonly whatsapp: WhatsAppService,
    private readonly analytics: AnalyticsService
  ) {}

  get review(): (typeof this.reviews)[number] {
    return this.reviews[this.activeReview()];
  }

  nextReview(): void {
    this.activeReview.update((current) => (current + 1) % this.reviews.length);
  }

  prevReview(): void {
    this.activeReview.update((current) => (current - 1 + this.reviews.length) % this.reviews.length);
  }

  productOrderLink(product: Product): string {
    return this.whatsapp.createOrderLink({
      product: product.name,
      quantity: '1',
      date: 'Por definir',
      address: 'Por definir'
    });
  }

  heroWhatsAppLink(): string {
    return this.whatsapp.createLink('Hola Delicias Bakery, quiero cotizar un pedido por encargo.');
  }

  trackWhatsApp(source: string): void {
    this.analytics.trackEvent('click_whatsapp', { source });
  }
}
