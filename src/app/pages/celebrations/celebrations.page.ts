import { Component } from '@angular/core';

import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-celebrations-page',
  imports: [ButtonComponent, CardComponent, SectionTitleComponent],
  templateUrl: './celebrations.page.html',
  styleUrl: './celebrations.page.css'
})
export default class CelebrationsPage {
  readonly occasions = [
    'Cumpleanos',
    'Aniversarios',
    'Baby shower',
    'Graduaciones',
    'Eventos corporativos'
  ];

  constructor(private readonly whatsapp: WhatsAppService) {}

  get link(): string {
    return this.whatsapp.createLink('Hola Delicias Bakery, quiero una torta para una celebracion especial.');
  }
}
