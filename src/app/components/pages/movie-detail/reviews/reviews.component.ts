import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../../../models/TabModel';
import { MovieResult, ReviewResult } from '../../../../models/Movie';
import { Credits } from '../../../../models/Credits';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  @Input() selectedTab: string = 'about-movie';

  @Input() reviews: ReviewResult[];
  @Input() aboutMovie: MovieResult;
  @Input() credits: Credits[];

  movieDetailTabs: Tab[] = [
    { id: 'about-movie', label: 'About Movie' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'cast', label: 'Cast' },
  ];

  constructor() {}

  ngOnInit(): void {}

  tabChange(tabId: string) {
    this.selectedTab = tabId;
  }
}
