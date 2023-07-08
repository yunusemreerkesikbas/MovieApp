import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieDetailComponent } from './components/pages/movie-detail/movie-detail.component';
import { WatchListComponent } from './components/pages/watch-list/watch-list.component';
import { SearchMovieComponent } from './components/pages/search-movie/search-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'watch-list', component: WatchListComponent },
  { path: 'search', component: SearchMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
