import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AnalyticsService } from '../../core/services/analytics.service';
import { getMinPrice } from '../../core/helpers/product-pricing.helper';
import {
  OCCASIONS,
  PRODUCT_CATEGORIES,
  PRODUCTS
} from '../../data/products.mock';
import { ProductCategory } from '../../models/product.model';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-products-page',
  imports: [
    CurrencyPipe,
    RouterLink,
    CardComponent,
    ButtonComponent,
    BadgeComponent,
    SectionTitleComponent
  ],
  templateUrl: './products.page.html',
  styleUrl: './products.page.css'
})
export default class ProductsPage implements OnInit, OnDestroy {
  readonly products = PRODUCTS;
  readonly categories = PRODUCT_CATEGORIES;
  readonly occasions = OCCASIONS;
  readonly skeletonItems = Array.from({ length: 8 }, (_, index) => index);

  readonly query = signal('');
  readonly selectedCategory = signal<'all' | ProductCategory>('all');
  readonly selectedOccasion = signal<'all' | string>('all');
  readonly loading = signal(true);
  readonly getMinPrice = getMinPrice;

  readonly filteredProducts = computed(() => {
    const query = this.query().trim().toLowerCase();
    const category = this.selectedCategory();
    const occasion = this.selectedOccasion();

    return this.products.filter((product) => {
      const categoryMatch = category === 'all' || product.category === category;
      const occasionMatch = occasion === 'all' || product.occasion.includes(occasion);
      const textMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.join(' ').toLowerCase().includes(query);

      return categoryMatch && occasionMatch && textMatch;
    });
  });

  private timer?: ReturnType<typeof setTimeout>;

  constructor(private readonly analytics: AnalyticsService) {}

  ngOnInit(): void {
    this.timer = setTimeout(() => this.loading.set(false), 650);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  setQuery(value: string): void {
    this.query.set(value);
  }

  setCategory(value: string): void {
    this.selectedCategory.set(value as 'all' | ProductCategory);
  }

  setOccasion(value: string): void {
    this.selectedOccasion.set(value);
  }

  trackViewProduct(slug: string): void {
    this.analytics.trackEvent('view_product', { source: 'catalog', slug });
  }
}
