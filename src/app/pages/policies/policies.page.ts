import { Component } from '@angular/core';

import { CardComponent } from '../../shared/ui/card/card.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-policies-page',
  imports: [CardComponent, SectionTitleComponent],
  templateUrl: './policies.page.html',
  styleUrl: './policies.page.css'
})
export default class PoliciesPage {}
