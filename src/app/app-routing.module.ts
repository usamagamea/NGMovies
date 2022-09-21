import { MovieComponent } from './pages/movie/movie.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'movies/genres/:genreId', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'tv-show/:id', component: TvShowComponent },
  { path: 'tv-shows/genres/:genreId', component: TvShowsComponent },
  { path: 'genres', component: GenresComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
