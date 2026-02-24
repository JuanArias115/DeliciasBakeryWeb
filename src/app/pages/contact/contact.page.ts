import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { siteConfig } from '../../core/config/site.config';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

interface ContactForm {
  name: FormControl<string>;
  phone: FormControl<string>;
  date: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, ButtonComponent, CardComponent, InputComponent, SectionTitleComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css'
})
export default class ContactPage {
  readonly config = siteConfig;

  readonly form = new FormGroup<ContactForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)]
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[0-9+\s-]{7,15}$/)]
    }),
    date: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    })
  });

  readonly fallbackLink = signal('');

  constructor(
    private readonly whatsapp: WhatsAppService,
    private readonly analytics: AnalyticsService
  ) {}

  get directLink(): string {
    return this.whatsapp.createLink('Hola Delicias Bakery, quiero asesoria para un pedido.');
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const message = [
      'Hola Delicias Bakery, vengo del formulario de contacto:',
      `Nombre: ${value.name}`,
      `Telefono: ${value.phone}`,
      `Fecha estimada: ${value.date}`,
      `Mensaje: ${value.message}`
    ].join('\n');

    const link = this.whatsapp.createLink(message);
    this.fallbackLink.set(link);

    this.analytics.trackEvent('submit_contact', {
      source: 'contact_form'
    });

    if (typeof window !== 'undefined') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  }
}
