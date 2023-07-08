import { Component, Input, OnInit } from '@angular/core';
import { MovieResult } from '../../../models/Movie';

@Component({
  selector: 'app-movie-runtime',
  templateUrl: './movie-runtime.component.html',
  styleUrls: ['./movie-runtime.component.css'],
})
export class MovieRuntimeComponent implements OnInit {
  @Input() runtime: number;
  constructor() {}

  ngOnInit(): void {}
}
