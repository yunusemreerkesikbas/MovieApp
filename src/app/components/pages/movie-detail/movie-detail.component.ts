import { Component, OnInit } from '@angular/core';
import { Genre, MovieResult } from '@models/movieModel';
import { ReviewModel, ReviewResult } from '@models/reviewModel';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@services/movie.service';
import { ImageService } from '@services/image.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: MovieResult;
  genres: Genre[];
  reviews: ReviewResult[];
  credits: ReviewModel[];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const movieId = params['id'];
      this.getMovieDetails(movieId);
      this.getMovieReviews(movieId);
      this.getMovieCredits(movieId);
    });
  }
  getMovieDetails(movieId: string | null) {
    if (movieId) {
      this.movieService.getMovieDetails(movieId).subscribe((response) => {
        this.movie = response;
        this.genres = response.genres;
      });
    }
  }
  getMovieReviews(movieId: number): void {
    this.movieService.getMovieReviews(movieId).subscribe((response) => {
      this.reviews = response.results;
    });
  }
  getMovieCredits(movieId: number): void {
    this.movieService.getMovieCredits(movieId).subscribe((response) => {
      this.credits = response.cast;
    });
  }
  getImageUrl(posterPath: string) {
    this.imageService.getImageUrl(posterPath);
  }
}
