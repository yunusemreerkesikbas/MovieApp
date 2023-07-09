import { Component, OnInit } from '@angular/core';
import { Tab } from '@models/TabModel';
import { MovieList, MovieRoot } from '@models/Movie';
import { MovieService } from '@services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeTabs: Tab[] = [
    { id: 'now-playing', label: 'Now Playing' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'top-rated', label: 'Top Rated' },
    { id: 'popular', label: 'Popular' },
  ];
  activeTab = 'popular';
  filterText = '';
  topMovies: MovieList[];
  movies: { [key: string]: MovieList[] } = {
    popular: [],
    top_rated: [],
    now_playing: [],
    upcoming: [],
  };
  filteredMovies: MovieList[] = [];
  isSearching = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getTopMovies();
    this.getMoviesByCategory('popular');
    this.getMoviesByCategory('top_rated');
    this.getMoviesByCategory('now_playing');
    this.getMoviesByCategory('upcoming');
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
