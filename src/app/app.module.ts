import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from '@components/search/search.component';
import { TopMoviesComponent } from '@components/pages/home/top-movies/top-movies.component';
import { TabListComponent } from '@components/tab-list/tab-list.component';
import { MoviesComponent } from '@components/pages/home/movies/movies.component';
import { MovieDetailComponent } from '@components/pages/movie-detail/movie-detail.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HomeComponent } from '@components/pages/home/home.component';
import { NavigateComponent } from '@components/navigate/navigate.component';
import { ReviewsComponent } from '@components/pages/movie-detail/reviews/reviews.component';
import { ContentComponent } from '@components/pages/movie-detail/content/content.component';
import { AboutMovieComponent } from '@components/pages/movie-detail/reviews/about-movie/about-movie.component';
import { ReviewComponent } from '@components/pages/movie-detail/reviews/review/review.component';
import { CastComponent } from '@components/pages/movie-detail/reviews/cast/cast.component';
import { WatchListComponent } from '@components/pages/watch-list/watch-list.component';
import { MovieTitleComponent } from '@components/movie-info/movie-title/movie-title.component';
import { MovieReleaseDateComponent } from '@components/movie-info/movie-release-date/movie-release-date.component';
import { MovieRuntimeComponent } from '@components/movie-info/movie-runtime/movie-runtime.component';
import { MovieGenreComponent } from '@components/movie-info/movie-genre/movie-genre.component';
import { FilterMoviePipe } from '@pipes/filter-movie.pipe';
import { SearchMovieComponent } from '@components/pages/search-movie/search-movie.component';
import { MovieComponent } from '@components/movie/movie.component';
import { NoResultComponent } from '@components/no-result/no-result.component';
import { MovieRatingComponent } from '@components/movie-info/movie-rating/movie-rating.component';
import { NavbarMobileComponent } from '@components/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarLaptopComponent } from '@components/navbar/navbar-laptop/navbar-laptop.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TopMoviesComponent,
    TabListComponent,
    MoviesComponent,
    MovieDetailComponent,
    FooterComponent,
    HomeComponent,
    NavigateComponent,
    ReviewsComponent,
    ContentComponent,
    AboutMovieComponent,
    ReviewComponent,
    CastComponent,
    WatchListComponent,
    MovieTitleComponent,
    MovieReleaseDateComponent,
    MovieRuntimeComponent,
    MovieGenreComponent,
    FilterMoviePipe,
    SearchMovieComponent,
    MovieComponent,
    NoResultComponent,
    MovieRatingComponent,
    NavbarMobileComponent,
    NavbarLaptopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
