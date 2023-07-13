import { Component, Input } from '@angular/core';
import { ImageService } from '@services/image.service';
import { MovieListModel } from '@models/movieListModel';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent {
  constructor(private imageService: ImageService) {}
  @Input() movies: MovieListModel[];

  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }
}
