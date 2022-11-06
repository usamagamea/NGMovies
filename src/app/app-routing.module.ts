import { MovieComponent } from './pages/movie/movie.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { MovieShowComponent } from './crud-movie/pages/movie-show/movie-show.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { canActivate: [AuthGuard], path: 'movies', component: MoviesComponent },
  { canActivate: [AuthGuard], path: 'movie/:id', component: MovieComponent },
  { canActivate: [AuthGuard], path: 'genres', component: GenresComponent },
  {
    canActivate: [AuthGuard],
    path: 'movies/genres/:genreId',
    component: MoviesComponent,
  },
  { canActivate: [AuthGuard], path: 'tv-shows', component: TvShowsComponent },
  { canActivate: [AuthGuard], path: 'tv-show/:id', component: TvShowComponent },
  {
    canActivate: [AuthGuard],
    path: 'tv-shows/genres/:genreId',
    component: TvShowsComponent,
  },
  { canActivate: [AuthGuard], path: 'genres', component: GenresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { canActivate: [AuthGuard], path: 'list', component: MovieShowComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
