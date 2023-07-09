import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResult } from '@models/Movie';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private watchList: MovieResult[] = [];

  constructor() {
    this.loadWatchList();
  }

  addToWatchList(movie: MovieResult): void {
    if (!this.isInWatchList(movie.id)) {
      this.watchList.push(movie);
      this.saveWatchList();
    }
  }

  removeFromWatchList(movieId: number): void {
    const index = this.watchList.findIndex((movie) => movie.id === movieId);
    if (index !== -1) {
      this.watchList.splice(index, 1);
      this.saveWatchList();
    }
  }

  getWatchList(): MovieResult[] {
    return this.watchList;
  }

  isInWatchList(movieId: number): boolean {
    return this.watchList.some((movie) => movie.id === movieId);
  }

  private saveWatchList(): void {
    localStorage.setItem('watchList', JSON.stringify(this.watchList));
  }

  private loadWatchList(): void {
    const storedWatchList = localStorage.getItem('watchList');
    if (storedWatchList) {
      this.watchList = JSON.parse(storedWatchList);
    }
  }
}
