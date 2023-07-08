import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import { MovieList, MovieRoot } from '../../../../models/Movie';
import { ImageService } from '../../../../services/image.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent {
  constructor(private imageService: ImageService) {}
  @Input() movies: MovieList[];

  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }
}
