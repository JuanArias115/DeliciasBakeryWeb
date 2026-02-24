import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../environments/environment';
import { createLocalBusinessSchema } from './core/services/schema.factory';
import { SeoService } from './core/services/seo.service';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { WhatsAppFloatComponent } from './layout/whatsapp-float.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsAppFloatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setJsonLd('jsonld-local-business', createLocalBusinessSchema(environment.siteUrl));
  }
}
