import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  trackEvent(event: string, params: Record<string, unknown> = {}): void {
    if (typeof window === 'undefined') {
      return;
    }

    const payload = { event, ...params };

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(payload);

    if (typeof window.gtag === 'function' && environment.gaMeasurementId) {
      window.gtag('event', event, params);
    }
  }
}
