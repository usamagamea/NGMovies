import { ImagesSize } from 'src/app/constant/image-size';
import {
  Movie,
  MovieImages,
  MovieVideo,
  MovieCredits,
  MovieDto,
} from './../../models/movies';
import { MoviesService } from './../../services/movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  moviesVideo: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: MovieDto | null = null;

  picSize = ImagesSize;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMoviesImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovie(id);
    });
  }
  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  getMovie(id: string) {
    this.moviesService.getMovieDetails(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getMovieCredits(id: string) {
    this.moviesService.getMoviesCredits(id).subscribe((creditsData) => {
      this.movieCredits = creditsData;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMoviesVideos(id).subscribe((moviesVideoData) => {
      this.moviesVideo = moviesVideoData;
    });
  }
  getMoviesImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((moviesImageData) => {
      this.movieImages = moviesImageData;
    });
  }
  getSimilarMovie(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((similarMovieData) => {
      this.similarMovies = similarMovieData;
    });
  }
}
