import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genres';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.getMoviesByGenre();
  }

  getMoviesByGenre() {
    this.moviesService.getMoviesGenres().subscribe((dataGenres) => {
      this.genres = dataGenres;
    });
  }
  getTvShowsByGenre() {
    this.tvShowsService.getTvShowsGenres().subscribe((dataGenres) => {
      this.genres = dataGenres;
    });
  }
}
