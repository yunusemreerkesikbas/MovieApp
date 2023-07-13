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
