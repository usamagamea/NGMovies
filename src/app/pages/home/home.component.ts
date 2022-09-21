import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Item, mapMovieToItem } from 'src/app/models/movies';
import { mapTvShowToItem } from 'src/app/models/tv';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcomingMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  tvShows: Item[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((Movies) => {
      this.popularMovies = Movies.map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('upcoming').subscribe((Movies) => {
      this.upcomingMovies = Movies.map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('top_rated').subscribe((Movies) => {
      this.topRatedMovies = Movies.map((movie) => mapMovieToItem(movie));
    });
    this.tvShowsService.getTvShows('airing_today').subscribe((Tv) => {
      this.tvShows = Tv.map((tvShow) => mapTvShowToItem(tvShow));
    });
  }
}
