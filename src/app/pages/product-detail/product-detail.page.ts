import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AnalyticsService } from '../../core/services/analytics.service';
import { createProductSchema } from '../../core/services/schema.factory';
import { SeoService } from '../../core/services/seo.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { Product } from '../../models/product.model';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { InputComponent } from '../../shared/ui/input/input.component';

@Component({
  selector: 'app-product-detail-page',
  imports: [
    CurrencyPipe,
    RouterLink,
    ReactiveFormsModule,
    CardComponent,
    ButtonComponent,
    BadgeComponent,
    InputComponent
  ],
  templateUrl: './product-detail.page.html',
  styleUrl: './product-detail.page.css'
})
export default class ProductDetailPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsAppService);
  private readonly analytics = inject(AnalyticsService);

  readonly quantity = new FormControl('1', {
    nonNullable: true,
    validators: [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]
  });
  readonly date = new FormControl('', { nonNullable: true, validators: [Validators.required] });
  readonly address = new FormControl('', { nonNullable: true, validators: [Validators.required] });
  readonly note = new FormControl('', { nonNullable: true });

  readonly product = this.route.snapshot.data['product'] as Product | null;

  ngOnInit(): void {
    if (!this.product) {
      return;
    }

    const path = `/productos/${this.product.slug}`;

    this.seo.apply({
      title: `${this.product.name} | Delicias Bakery`,
      description: `${this.product.description} Disponible en Chia y Cajica. Pedidos por encargo con 24h de anticipacion.`,
      path,
      type: 'product',
      image: this.product.images[0]
    });

    this.seo.setJsonLd('jsonld-product', createProductSchema(this.product, this.seo.buildCanonicalUrl(path)));

    this.analytics.trackEvent('view_product', {
      source: 'detail_page',
      product: this.product.slug
    });
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('jsonld-product');
  }

  get orderLink(): string {
    if (!this.product) {
      return this.whatsapp.createLink('Hola Delicias Bakery, quiero cotizar un pedido.');
    }

    return this.whatsapp.createOrderLink({
      product: this.product.name,
      quantity: this.quantity.value,
      date: this.date.value || 'Por definir',
      address: this.address.value || 'Por definir',
      note: this.note.value
    });
  }

  trackClick(): void {
    if (!this.product) {
      return;
    }

    this.analytics.trackEvent('click_whatsapp', {
      source: 'product_detail',
      product: this.product.slug
    });
  }
}
