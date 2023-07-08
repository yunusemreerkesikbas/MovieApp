import { Component, Input, OnInit } from '@angular/core';
import { WatchListService } from '../../services/watchlist.service';
import { MovieResult } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css'],
})
export class NavigateComponent implements OnInit {
  @Input() title: string = '';
  @Input() movie: MovieResult;
  bookmarked: boolean = false;

  constructor(
    private watchListService: WatchListService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.bookmarked = this.isInWatchList(this.movie?.id);
  }

  toggleBookmark(movieId: number): void {
    if (this.bookmarked) {
      this.removeFromWatchList(movieId);
    } else {
      this.addToWatchList(movieId);
    }
    this.bookmarked = !this.bookmarked;
  }

  addToWatchList(movieId: number): void {
    this.movieService
      .getMovieDetails(movieId.toString())
      .subscribe((response: MovieResult) => {
        this.watchListService.addToWatchList(response);
        console.log('watchliste eklendi');
      });
  }

  removeFromWatchList(movieId: number): void {
    this.watchListService.removeFromWatchList(movieId);
  }

  isInWatchList(movieId: number): boolean {
    return this.watchListService.isInWatchList(movieId);
  }

  getBookmarkIcon(movieId: number): string {
    return this.isInWatchList(movieId)
      ? '/assets/images/bookmarked.svg'
      : '/assets/images/bookmark.svg';
  }
}
