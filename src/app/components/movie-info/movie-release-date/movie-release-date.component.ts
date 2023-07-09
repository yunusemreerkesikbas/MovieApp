import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-release-date',
  templateUrl: './movie-release-date.component.html',
  styleUrls: ['./movie-release-date.component.css'],
})
export class MovieReleaseDateComponent implements OnInit {
  @Input() release_date: string;
  constructor() {}

  ngOnInit(): void {}
}
