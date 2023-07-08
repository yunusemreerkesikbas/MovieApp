import { Component } from '@angular/core';
import { MovieList } from '../../../models/Movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  filterText = '';
  movies: MovieList[] = [];
  isSearching = false;
  title: 'Search Movie';

  constructor(private movieService: MovieService) {}

  onFilterTextChange(filterText: string) {
    this.filterText = filterText;
    this.onSearch();
  }

  onSearch() {
    if (this.filterText.trim() === '') {
      this.movies = [];
      this.isSearching = false;
      return;
    }

    this.isSearching = true;
    this.movieService
      .searchMovies(this.filterText)
      .subscribe((response: any) => {
        this.movies = response.results;
        console.log(this.movies);
      });
  }
}
