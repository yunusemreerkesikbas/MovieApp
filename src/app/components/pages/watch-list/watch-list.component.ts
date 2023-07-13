import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MovieResult } from '@models/movieModel';
import { MovieService } from '@services/movie.service';
import { ImageService } from '@services/image.service';
import { WatchListService } from '@services/watchlist.service';

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

  getImageUrl(posterPath: string): string {
    return this.imageService.getImageUrl(posterPath);
  }
}
