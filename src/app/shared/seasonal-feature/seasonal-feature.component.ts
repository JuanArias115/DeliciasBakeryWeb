import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { getDefaultSize, getMinPrice } from '../../core/helpers/product-pricing.helper';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-seasonal-feature',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './seasonal-feature.component.html',
  styleUrl: './seasonal-feature.component.css'
})
export class SeasonalFeatureComponent {
  @Input({ required: true }) product!: Product;
  private readonly whatsapp = inject(WhatsAppService);
  private readonly analytics = inject(AnalyticsService);
  readonly getMinPrice = getMinPrice;
  readonly getDefaultSize = getDefaultSize;

  get orderLink(): string {
    return this.whatsapp.createOrderLink({
      product: this.product.name,
      size: getDefaultSize(this.product)?.label,
      quantity: '1',
      date: '__',
      address: '__'
    });
  }

  trackOrder(): void {
    this.analytics.trackEvent('click_whatsapp', {
      source: 'home_seasonal_feature',
      slug: this.product.slug
    });
  }
}
