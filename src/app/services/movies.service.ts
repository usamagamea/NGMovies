import {
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  MovieVideosDTO,
} from './../models/movies';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TvDto } from '../models/tv';
import { GenresDTO } from '../models/genres';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseURL = environment.baseURL;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(type = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseURL}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.results.slice(0, count));
        })
      );
  }

  getSimilarMovies(id: string) {
    return this.http
      .get<MovieDto>(
        `${this.baseURL}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results.slice(0, 6));
        })
      );
  }

  getMoviesVideos(id: string) {
    return this.http
      .get<MovieVideosDTO>(
        `${this.baseURL}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results);
        })
      );
  }

  getMoviesGenres() {
    return this.http
      .get<GenresDTO>(`${this.baseURL}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.genres);
        })
      );
  }

  getMoviesByGenre(genreId: string, page: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseURL}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results);
        })
      );
  }
  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${this.baseURL}/movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMoviesCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseURL}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMovieDetails(id: string) {
    return this.http.get<Movie>(
      `${this.baseURL}/movie/${id}?api_key=${this.apiKey}`
    );
  }
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDto>(
        `${this.baseURL}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data);
        })
      );
  }

  getTvShows(type = 'airing_today', count: number = 12) {
    return this.http
      .get<TvDto>(`${this.baseURL}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.results.slice(0, 12));
        })
      );
  }
}
