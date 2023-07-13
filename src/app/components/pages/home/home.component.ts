import { Component, OnInit } from '@angular/core';
import { MovieService } from '@services/movie.service';
import { MovieListModel, MovieRoot } from '@models/movieListModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activeTab = 'popular';
  filterText = '';
  topMovies: MovieListModel[];
  movies: { [key: string]: MovieListModel[] } = {
    popular: [],
    top_rated: [],
    now_playing: [],
    upcoming: [],
  };
  isLoading: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getTopMovies();
    this.getMoviesByCategory('popular');
    this.getMoviesByCategory('top_rated');
    this.getMoviesByCategory('now_playing');
    this.getMoviesByCategory('upcoming');
    this.isLoading = false;
  }

  getTopMovies(): void {
    this.movieService.getTopMovies().subscribe((response) => {
      this.topMovies = response.results;
      console.log(this.topMovies);
    });
  }

  getMoviesByCategory(category: string): void {
    this.movieService
      .getMoviesByCategory(category)
      .subscribe((response: MovieRoot) => {
        this.movies[category] = response.results;
      });
  }

  onFilterTextChange(filterText: string): void {
    this.filterText = filterText;
  }
}
