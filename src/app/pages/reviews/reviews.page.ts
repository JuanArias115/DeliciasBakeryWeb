import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { REVIEWS } from '../../data/reviews.mock';
import { CardComponent } from '../../shared/ui/card/card.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-reviews-page',
  imports: [DatePipe, CardComponent, SectionTitleComponent],
  templateUrl: './reviews.page.html',
  styleUrl: './reviews.page.css'
})
export default class ReviewsPage {
  readonly reviews = REVIEWS;

  get averageRating(): number {
    const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return Number((total / this.reviews.length).toFixed(1));
  }
}
