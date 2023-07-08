import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from '../../models/Movie';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieList;
  @Input() filterText: string = '';
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }
}
