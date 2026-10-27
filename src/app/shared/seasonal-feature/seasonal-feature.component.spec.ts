import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PRODUCTS } from '../../data/products.mock';
import { SeasonalFeatureComponent } from './seasonal-feature.component';
import { getDefaultSize, getMinPrice } from '../../core/helpers/product-pricing.helper';

describe('Pumpkin Spice Cake seasonal feature', () => {
  const product = PRODUCTS.find((item) => item.slug === 'pumpkin-spice-cake')!;

  it('leads the catalog and featured products at the confirmed price', () => {
    expect(PRODUCTS[0]).toBe(product);
    expect(PRODUCTS.filter((item) => item.featured)[0]).toBe(product);
    expect(getMinPrice(product)).toBe(59000);
    expect(getDefaultSize(product)?.serves).toBe('6–8 porciones');
  });

  it('provides the photo, product link and a complete WhatsApp message', async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalFeatureComponent], providers: [provideRouter([])]
    }).compileComponents();
    const fixture = TestBed.createComponent(SeasonalFeatureComponent);
    fixture.componentRef.setInput('product', product);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('img')?.getAttribute('src')).toBe(product.images[0]);
    expect(element.querySelector('.seasonal-detail')?.getAttribute('href')).toBe('/productos/pumpkin-spice-cake');
    const order = new URL(element.querySelector('.seasonal-order')!.getAttribute('href')!);
    expect(order.hostname).toBe('wa.me');
    const message = order.searchParams.get('text');
    for (const text of ['Pumpkin Spice Cake', '6–8 porciones', 'Cantidad: 1', 'Fecha de entrega: __', 'Dirección: __']) {
      expect(message).toContain(text);
    }
  });
});
