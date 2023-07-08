import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css'],
})
export class MovieRatingComponent implements OnInit {
  @Input() rating: number;
  constructor() {}

  ngOnInit(): void {}
}
