import { Component } from '@angular/core';
import { MovieService } from '@services/movie.service';
import { MovieListModel } from '@models/movieListModel';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  filterText = '';
  movies: MovieListModel[] = [];
  isSearching = false;
  title: 'Search Movie';
  isLoading = false;
  constructor(private movieService: MovieService) {}

  onFilterTextChange(filterText: string) {
    this.filterText = filterText;
    this.onSearch();
  }

  onSearch() {
    this.isLoading = true;
    if (this.filterText.trim() === '') {
      this.movies = [];
      this.isSearching = false;
      this.isLoading = false;
      return;
    }

    this.isSearching = true;
    this.movieService
      .searchMovies(this.filterText)
      .subscribe((response: any) => {
        this.movies = response.results;
      });
    this.isLoading = false;
  }
}
