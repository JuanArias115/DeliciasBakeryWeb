import { Component } from '@angular/core';

import { AnalyticsService } from '../core/services/analytics.service';
import { WhatsAppService } from '../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-float',
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.css'
})
export class WhatsAppFloatComponent {
  constructor(
    private readonly whatsapp: WhatsAppService,
    private readonly analytics: AnalyticsService
  ) {}

  get link(): string {
    return this.whatsapp.createLink('Hola Delicias Bakery, quiero asesoria para un pedido.');
  }

  onClick(): void {
    this.analytics.trackEvent('click_whatsapp', { source: 'floating_button' });
  }
}
