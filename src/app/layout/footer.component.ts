import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { siteConfig } from '../core/config/site.config';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly config = siteConfig;
}
