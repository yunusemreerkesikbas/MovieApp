import { Component, Input, OnInit } from '@angular/core';
import { MovieResult, ReviewResult } from '../../../../../models/Movie';

@Component({
  selector: 'app-about-movie',
  templateUrl: './about-movie.component.html',
  styleUrls: ['./about-movie.component.css'],
})
export class AboutMovieComponent implements OnInit {
  @Input() about: MovieResult;
  constructor() {}

  ngOnInit(): void {}
}
