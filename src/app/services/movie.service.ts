import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreditsRoot, ReviewRoot } from '@models/reviewModel';
import { environment } from '@environments/environment';
import { MovieRoot } from '@models/movieListModel';
import { MovieResult } from '@models/movieModel';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getTopMovies(): Observable<MovieRoot> {
    const url = `${environment.ROOT_URL}movie/popular?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<MovieRoot>(url);
  }

  getMoviesByCategory(category: string): Observable<MovieRoot> {
    const url = `${environment.ROOT_URL}movie/${category}?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<MovieRoot>(url);
  }

  getMovieDetails(movieId: string): Observable<MovieResult> {
    const url = `${environment.ROOT_URL}movie/${movieId}?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<MovieResult>(url);
  }

  getMovieReviews(movieId: number): Observable<ReviewRoot> {
    const url = `${environment.ROOT_URL}/movie/${movieId}/reviews?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<ReviewRoot>(url);
  }

  getMovieCredits(movieId: number): Observable<CreditsRoot> {
    const url = `${environment.ROOT_URL}/movie/${movieId}/credits?api_key=${environment.MOVIEDB_API_KEY}`;
    return this.httpClient.get<CreditsRoot>(url);
  }

  searchMovies(query: string): Observable<MovieRoot> {
    const url = `${environment.ROOT_URL}/search/movie?api_key=${environment.MOVIEDB_API_KEY}&query=${query}`;
    return this.httpClient.get<MovieRoot>(url);
  }
}
