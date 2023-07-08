import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieResult } from '../../../models/Movie';
import { WatchListService } from '../../../services/watchlist.service';
import { ImageService } from '../../../services/image.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  watchList: MovieResult[] = [];
  title: 'Watch List';

  constructor(
    private movieService: MovieService,
    private watchListService: WatchListService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.getWatchListMovies();
  }

  getWatchListMovies(): void {
    const movieIds = this.watchListService.getWatchList();
    const requests = movieIds.map((movie) =>
      this.movieService.getMovieDetails(String(movie.id))
    );

    forkJoin(requests).subscribe((responses: MovieResult[]) => {
      this.watchList = responses;
      console.log('watchlist', this.watchList);
    });
  }

  removeFromWatchList(movieId: string): void {
    const numericMovieId = parseInt(movieId, 10);
    this.watchListService.removeFromWatchList(numericMovieId);
    this.watchList = this.watchList.filter(
      (movie) => movie.id !== numericMovieId
    );
  }

  getImageUrl(posterPath: string): string {
    return this.imageService.getImageUrl(posterPath);
  }
}
