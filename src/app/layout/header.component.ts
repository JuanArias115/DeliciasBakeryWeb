import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { navigationLinks } from '../core/config/site.config';
import { WhatsAppService } from '../core/services/whatsapp.service';
import { ButtonComponent } from '../shared/ui/button/button.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly links = navigationLinks;
  readonly menuOpen = signal(false);

  constructor(private readonly whatsapp: WhatsAppService) {}

  get whatsappUrl(): string {
    return this.whatsapp.createLink('Hola Delicias Bakery, quiero hacer un pedido por encargo.');
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((state) => !state);
  }
}
