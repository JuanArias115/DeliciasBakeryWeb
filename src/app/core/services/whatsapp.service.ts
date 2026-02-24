import { Injectable } from '@angular/core';

import { siteConfig } from '../config/site.config';

export interface WhatsAppOrderPayload {
  product?: string;
  size?: string;
  quantity?: string;
  date?: string;
  address?: string;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
  readonly phone = siteConfig.whatsappNumber;

  buildOrderMessage(payload: WhatsAppOrderPayload): string {
    const lines = [
      'Hola Delicias Bakery, quiero hacer un pedido:',
      payload.product ? `Producto: ${payload.product}` : '',
      payload.size ? `Tamano: ${payload.size}` : '',
      payload.quantity ? `Cantidad: ${payload.quantity}` : '',
      payload.date ? `Fecha de entrega: ${payload.date}` : '',
      payload.address ? `Direccion: ${payload.address}` : '',
      payload.note ? `Detalle: ${payload.note}` : '',
      '',
      'Gracias'
    ].filter((line) => line.length > 0);

    return lines.join('\n');
  }

  createLink(message: string): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
  }

  createOrderLink(payload: WhatsAppOrderPayload): string {
    return this.createLink(this.buildOrderMessage(payload));
  }
}
