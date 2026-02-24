import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { SeoConfig, SeoService } from '../services/seo.service';

export const seoResolver: ResolveFn<boolean> = (route, state) => {
  const seo = inject(SeoService);
  const routeSeo = route.data['seo'] as Omit<SeoConfig, 'path'> | undefined;

  if (!routeSeo) {
    return true;
  }

  seo.apply({
    ...routeSeo,
    path: state.url.split('?')[0]
  });

  return true;
};
