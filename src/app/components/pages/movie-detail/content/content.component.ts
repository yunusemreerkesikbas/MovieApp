// content.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, MovieResult } from '@models/Movie';
import { MovieService } from '@services/movie.service';
import { ImageService } from '@services/image.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() movie: MovieResult;
  @Input() genres: Genre[];
  posterImageUrl: string;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private imageService: ImageService
  ) {}
  ngOnInit() {}

  getImageUrl(posterPath: string): string {
    return this.imageService.getImageUrl(posterPath);
  }
}
