import { Component, Input, OnInit } from '@angular/core';
import { MovieResult } from '../../../models/Movie';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css'],
})
export class MovieTitleComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
