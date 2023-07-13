// movies.component.ts
import { Component, Input } from '@angular/core';
import { Tab } from '@models/tabModel';
import { ImageService } from '@services/image.service';
import { MovieListModel } from '@models/movieListModel';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  @Input() activeTab: string = 'now_playing';
  @Input() filterText: string = '';
  @Input() movies: { [key: string]: MovieListModel[] };

  movieTabs: Tab[] = [
    { id: 'popular', label: 'Popular' },
    { id: 'top_rated', label: 'Top Rated' },
    { id: 'now_playing', label: 'Now Playing' },
    { id: 'upcoming', label: 'Upcoming' },
  ];

  constructor(private imageService: ImageService) {}

  tabChange(tab: string) {
    this.activeTab = tab;
  }

  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }
}
