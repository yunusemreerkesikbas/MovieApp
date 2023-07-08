// app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieList, MovieRoot } from '../../../models/Movie';
import { Tab } from '../../../models/TabModel';

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
  activeTab: string = 'popular';
  filterText = '';
  topMovies: MovieList[];
  movies: { [key: string]: MovieList[] } = {
    popular: [],
    top_rated: [],
    now_playing: [],
    upcoming: [],
  };
  filteredMovie: MovieList[] = [];
  isSearching = false;
  constructor(private movieService: MovieService) {
    {
      this.getMoviesByCategory('popular');
      this.getMoviesByCategory('top_rated');
      this.getMoviesByCategory('now_playing');
      this.getMoviesByCategory('upcoming');
    }
  }

  ngOnInit(): void {
    this.getTopMovies();
  }
  getTopMovies() {
    this.movieService.getTopMovies().subscribe((response) => {
      this.topMovies = response.results;
      console.log(this.topMovies);
    });
  }
  getMoviesByCategory(category: string) {
    this.movieService
      .getMoviesByCategory(category)
      .subscribe((response: MovieRoot) => {
        this.movies[category] = response.results;
      });
  }
  onFilterTextChange(filterText: string) {
    this.filterText = filterText;
  }
}
