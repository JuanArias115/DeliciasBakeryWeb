import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { getDefaultSize, getMinPrice, getSelectedSize } from '../../core/helpers/product-pricing.helper';
import { AnalyticsService } from '../../core/services/analytics.service';
import { createProductSchema } from '../../core/services/schema.factory';
import { SeoService } from '../../core/services/seo.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { CLOUDINARY_WIDTHS, cldSized } from '../../lib/cloudinary';
import {
  Product,
  ProductCoatingOption,
  ProductCustomOption,
  ProductCustomOptionGroup,
  ProductFlavorOption,
  ProductSizeOption,
  ProductToppingOption
} from '../../models/product.model';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ProductImageComponent } from '../../shared/ui/product-image/product-image.component';

@Component({
  selector: 'app-product-detail-page',
  imports: [
    CurrencyPipe,
    RouterLink,
    ReactiveFormsModule,
    CardComponent,
    ButtonComponent,
    BadgeComponent,
    IconComponent,
    InputComponent,
    ProductImageComponent
  ],
  templateUrl: './product-detail.page.html',
  styleUrl: './product-detail.page.css'
})
export default class ProductDetailPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsAppService);
  private readonly analytics = inject(AnalyticsService);
  private readonly currencyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  });

  readonly quantity = new FormControl('1', {
    nonNullable: true,
    validators: [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]
  });
  readonly date = new FormControl('', { nonNullable: true, validators: [Validators.required] });
  readonly address = new FormControl('', { nonNullable: true, validators: [Validators.required] });
  readonly note = new FormControl('', { nonNullable: true });
  readonly sizeId = new FormControl('', { nonNullable: true });
  readonly flavorId = new FormControl('', { nonNullable: true });
  readonly coatingId = new FormControl('', { nonNullable: true });
  readonly toppingId = new FormControl('', { nonNullable: true });
  readonly mixCounts: Record<string, number> = {};
  readonly customSelections: Record<string, string> = {};
  readonly customMultiSelections: Record<string, string[]> = {};
  readonly activeImageIndex = signal(0);

  readonly product = this.route.snapshot.data['product'] as Product | null;
  readonly productImageDetail = (image: string): string => cldSized(image, CLOUDINARY_WIDTHS.detail);
  readonly activeImage = computed(() => {
    if (!this.product?.images?.length) {
      return '';
    }

    return this.product.images[this.activeImageIndex()] ?? this.product.images[0];
  });

  private carouselTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (!this.product) {
      return;
    }

    const defaultSize = getDefaultSize(this.product);
    this.sizeId.setValue(defaultSize?.id ?? '');
    this.flavorId.setValue(this.defaultFlavor?.id ?? '');
    this.coatingId.setValue(this.defaultCoating?.id ?? '');
    this.toppingId.setValue(this.defaultTopping?.id ?? '');
    this.initializeMixCounts();
    this.initializeCustomSelections();
    this.startCarouselIfNeeded();

    const path = `/productos/${this.product.slug}`;

    this.seo.apply({
      title: `${this.product.name} | Delicias Bakery`,
      description: `${this.product.description} Disponible en Chía y Cajicá. Pedidos por encargo con 24h de anticipación.`,
      path,
      type: 'product',
      image: this.productImageDetail(this.product.images[0])
    });

    this.seo.setJsonLd('jsonld-product', createProductSchema(this.product, this.seo.buildCanonicalUrl(path)));

    this.analytics.trackEvent('view_product', {
      source: 'detail_page',
      product: this.product.slug
    });
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }

    this.seo.removeJsonLd('jsonld-product');
  }

  get orderLink(): string {
    if (!this.product) {
      return this.whatsapp.createLink('Hola Delicias Bakery, quiero cotizar un pedido.');
    }

    const selectedSize = getSelectedSize(this.product, this.sizeId.value);

    return this.whatsapp.createOrderLink({
      product: this.product.name,
      size: selectedSize?.label,
      flavor: this.selectedFlavor?.label,
      coating: this.selectedCoating?.label,
      topping: this.selectedTopping?.label,
      mix: this.mixSummary || undefined,
      customizations: this.selectedCustomizationLines,
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

    const selectedSize = getSelectedSize(this.product, this.sizeId.value);

    this.analytics.trackEvent('click_whatsapp', {
      source: 'product_detail',
      product: this.product.slug,
      size: selectedSize?.id ?? null,
      flavor: this.selectedFlavor?.id ?? null,
      coating: this.selectedCoating?.id ?? null,
      topping: this.selectedTopping?.id ?? null,
      mix: this.mixSummary || null,
      customizations: this.selectedCustomizationLines.join(' | ') || null
    });
  }

  get selectedSize(): ProductSizeOption | undefined {
    if (!this.product) {
      return undefined;
    }

    return getSelectedSize(this.product, this.sizeId.value);
  }

  get defaultFlavor(): ProductFlavorOption | undefined {
    if (!this.product?.flavorOptions?.length) {
      return undefined;
    }

    if (this.product.defaultFlavorId) {
      const explicitFlavor = this.product.flavorOptions.find((flavor) => flavor.id === this.product?.defaultFlavorId);
      if (explicitFlavor) {
        return explicitFlavor;
      }
    }

    return this.product.flavorOptions[0];
  }

  get selectedFlavor(): ProductFlavorOption | undefined {
    if (!this.product?.flavorOptions?.length) {
      return undefined;
    }

    if (!this.flavorId.value) {
      return this.defaultFlavor;
    }

    return this.product.flavorOptions.find((flavor) => flavor.id === this.flavorId.value) ?? this.defaultFlavor;
  }

  get classicFlavors(): ProductFlavorOption[] {
    return this.product?.flavorOptions?.filter((flavor) => flavor.tier !== 'premium') ?? [];
  }

  get premiumFlavors(): ProductFlavorOption[] {
    return this.product?.flavorOptions?.filter((flavor) => flavor.tier === 'premium') ?? [];
  }

  get defaultTopping(): ProductToppingOption | undefined {
    if (!this.product?.toppingOptions?.length) {
      return undefined;
    }

    if (this.product.defaultToppingId) {
      const explicitTopping = this.product.toppingOptions.find((topping) => topping.id === this.product?.defaultToppingId);
      if (explicitTopping) {
        return explicitTopping;
      }
    }

    return this.product.toppingOptions[0];
  }

  get defaultCoating(): ProductCoatingOption | undefined {
    if (!this.product?.coatingOptions?.length) {
      return undefined;
    }

    if (this.product.defaultCoatingId) {
      const explicitCoating = this.product.coatingOptions.find((coating) => coating.id === this.product?.defaultCoatingId);
      if (explicitCoating) {
        return explicitCoating;
      }
    }

    return this.product.coatingOptions[0];
  }

  get selectedCoating(): ProductCoatingOption | undefined {
    if (!this.product?.coatingOptions?.length) {
      return undefined;
    }

    if (!this.coatingId.value) {
      return this.defaultCoating;
    }

    return this.product.coatingOptions.find((coating) => coating.id === this.coatingId.value) ?? this.defaultCoating;
  }

  get selectedTopping(): ProductToppingOption | undefined {
    if (!this.product?.toppingOptions?.length) {
      return undefined;
    }

    if (!this.toppingId.value) {
      return this.defaultTopping;
    }

    return this.product.toppingOptions.find((topping) => topping.id === this.toppingId.value) ?? this.defaultTopping;
  }

  get displayImage(): string {
    if (!this.product) {
      return '';
    }

    if (this.product.autoRotateImages && this.product.images.length > 1) {
      return this.activeImage();
    }

    return this.selectedSize?.image ?? this.product.images[0];
  }

  get displayPricePrefix(): string {
    if (this.product?.priceLabelMode === 'from') {
      return 'Desde ';
    }

    return '';
  }

  get mixTotalRequired(): number {
    return this.product?.mixTotal ?? 0;
  }

  get currentMixCount(): number {
    return Object.values(this.mixCounts).reduce((total, value) => total + value, 0);
  }

  get remainingMixCount(): number {
    return Math.max(this.mixTotalRequired - this.currentMixCount, 0);
  }

  get mixSummary(): string {
    if (!this.product?.mixOptions?.length) {
      return '';
    }

    return this.product.mixOptions
      .filter((option) => this.getMixCount(option.id) > 0)
      .map((option) => `${option.label} x${this.getMixCount(option.id)}`)
      .join(', ');
  }

  get singleCustomOptionGroups(): ProductCustomOptionGroup[] {
    return this.product?.customOptionGroups?.filter((group) => group.selection === 'single') ?? [];
  }

  get multiCustomOptionGroups(): ProductCustomOptionGroup[] {
    return this.product?.customOptionGroups?.filter((group) => group.selection === 'multiple') ?? [];
  }

  get selectedCustomizationLines(): string[] {
    const lines: string[] = [];

    for (const group of this.singleCustomOptionGroups) {
      const selectedOption = this.selectedOptionForGroup(group);
      if (selectedOption) {
        lines.push(`${group.label}: ${this.optionLabel(selectedOption)}`);
      }
    }

    for (const group of this.multiCustomOptionGroups) {
      const selectedOptions = this.selectedOptionsForGroup(group);
      if (selectedOptions.length) {
        lines.push(`${group.label}: ${selectedOptions.map((option) => this.optionLabel(option)).join(', ')}`);
      }
    }

    return lines;
  }

  get hasMissingRequiredSelections(): boolean {
    const missingSingles = this.singleCustomOptionGroups.some(
      (group) => group.required && this.singleSelectionValue(group.id).length === 0
    );
    const missingMultiples = this.multiCustomOptionGroups.some(
      (group) => group.required && this.multiSelectionValues(group.id).length === 0
    );

    return missingSingles || missingMultiples;
  }

  get canOrder(): boolean {
    const mixValid = !this.product?.mixOptions?.length || this.currentMixCount === this.mixTotalRequired;
    return mixValid && !this.hasMissingRequiredSelections;
  }

  initializeMixCounts(): void {
    if (!this.product?.mixOptions?.length) {
      return;
    }

    for (const option of this.product.mixOptions) {
      this.mixCounts[option.id] = 0;
    }
  }

  initializeCustomSelections(): void {
    if (!this.product?.customOptionGroups?.length) {
      return;
    }

    for (const group of this.product.customOptionGroups) {
      if (group.selection === 'single') {
        this.customSelections[group.id] = '';
        continue;
      }

      this.customMultiSelections[group.id] = [];
    }
  }

  getMixCount(optionId: string): number {
    return this.mixCounts[optionId] ?? 0;
  }

  incrementMix(optionId: string): void {
    if (!this.product?.mixOptions?.length || this.currentMixCount >= this.mixTotalRequired) {
      return;
    }

    this.mixCounts[optionId] = this.getMixCount(optionId) + 1;
  }

  decrementMix(optionId: string): void {
    if (!this.product?.mixOptions?.length || this.getMixCount(optionId) <= 0) {
      return;
    }

    this.mixCounts[optionId] = this.getMixCount(optionId) - 1;
  }

  singleSelectionValue(groupId: string): string {
    return this.customSelections[groupId] ?? '';
  }

  setSingleSelection(groupId: string, optionId: string): void {
    this.customSelections[groupId] = optionId;
  }

  multiSelectionValues(groupId: string): string[] {
    return this.customMultiSelections[groupId] ?? [];
  }

  toggleMultiSelection(groupId: string, optionId: string, checked: boolean): void {
    const next = new Set(this.multiSelectionValues(groupId));

    if (checked) {
      next.add(optionId);
    } else {
      next.delete(optionId);
    }

    this.customMultiSelections[groupId] = Array.from(next);
  }

  isMultiSelected(groupId: string, optionId: string): boolean {
    return this.multiSelectionValues(groupId).includes(optionId);
  }

  selectedOptionForGroup(group: ProductCustomOptionGroup): ProductCustomOption | undefined {
    const selectedId = this.singleSelectionValue(group.id);
    return group.options.find((option) => option.id === selectedId);
  }

  selectedOptionsForGroup(group: ProductCustomOptionGroup): ProductCustomOption[] {
    const selectedIds = new Set(this.multiSelectionValues(group.id));
    return group.options.filter((option) => selectedIds.has(option.id));
  }

  optionLabel(option: ProductCustomOption | ProductFlavorOption): string {
    if (!option.surcharge) {
      return option.label;
    }

    return `${option.label} (${this.currencyFormatter.format(option.surcharge)})`;
  }

  startCarouselIfNeeded(): void {
    if (!this.product?.autoRotateImages || this.product.images.length < 2) {
      return;
    }

    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }

    this.carouselTimer = setInterval(() => {
      this.activeImageIndex.update((current) => (current + 1) % this.product!.images.length);
    }, 2800);
  }

  selectImage(index: number): void {
    this.activeImageIndex.set(index);
    this.startCarouselIfNeeded();
  }

  prevImage(): void {
    if (!this.product?.images.length) {
      return;
    }

    this.activeImageIndex.update((current) => (current - 1 + this.product!.images.length) % this.product!.images.length);
    this.startCarouselIfNeeded();
  }

  nextImage(): void {
    if (!this.product?.images.length) {
      return;
    }

    this.activeImageIndex.update((current) => (current + 1) % this.product!.images.length);
    this.startCarouselIfNeeded();
  }

  get displayPrice(): number {
    if (!this.product) {
      return 0;
    }

    const customOptionsSurcharge = [
      ...this.singleCustomOptionGroups.flatMap((group) => this.selectedOptionForGroup(group) ?? []),
      ...this.multiCustomOptionGroups.flatMap((group) => this.selectedOptionsForGroup(group))
    ].reduce((total, option) => total + (option.surcharge ?? 0), 0);

    return (
      (this.selectedSize?.price ?? getMinPrice(this.product)) +
      (this.selectedFlavor?.surcharge ?? 0) +
      (this.selectedCoating?.surcharge ?? 0) +
      (this.selectedTopping?.surcharge ?? 0) +
      customOptionsSurcharge
    );
  }
}
