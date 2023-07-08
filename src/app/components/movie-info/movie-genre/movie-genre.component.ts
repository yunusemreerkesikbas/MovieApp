import { Component, Input, OnInit } from '@angular/core';
import { Genre } from '../../../models/Movie';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.css'],
})
export class MovieGenreComponent implements OnInit {
  @Input() genres: Genre[];
  constructor() {}

  ngOnInit(): void {}
}
