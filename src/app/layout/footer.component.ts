import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { siteConfig } from '../core/config/site.config';
import { IconComponent } from '../shared/ui/icon/icon.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly config = siteConfig;
}
