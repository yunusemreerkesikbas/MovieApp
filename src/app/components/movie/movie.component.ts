import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '@services/image.service';
import { MovieListModel } from '@models/movieListModel';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieListModel;
  @Input() filterText: string;
  @Input() width: number = 137;
  @Input() height: number = 206;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }
}
