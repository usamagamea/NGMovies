import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenresDTO } from '../models/genres';
import { of } from 'rxjs';
import {
  TvShow,
  TvShowCredits,
  TvShowDto,
  TvShowImages,
  TvShowVideoDto,
} from '../models/tv';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  baseURL = environment.baseURL;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}
  getTvShows(type = 'upcoming', count: number = 12) {
    return this.http
      .get<TvShowDto>(`${this.baseURL}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.results.slice(0, count));
        })
      );
  }
  getTvShow(id: string) {
    return this.http.get<TvShow>(
      `${this.baseURL}/tv/${id}?api_key=${this.apiKey}`
    );
  }

  getTvShowsSimilar(id: string) {
    return this.http
      .get<TvShowDto>(`${this.baseURL}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.results.slice(0, 6));
        })
      );
  }

  getTvShowsVideos(id: string) {
    return this.http
      .get<TvShowVideoDto>(
        `${this.baseURL}/tv/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results);
        })
      );
  }

  getTvShowsGenres() {
    return this.http
      .get<GenresDTO>(`${this.baseURL}/genre/tv/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((data) => {
          return of(data.genres);
        })
      );
  }

  getTvShowsByGenre(genreId: string, page: number) {
    return this.http
      .get<TvShowDto>(
        `${this.baseURL}/discover/tv?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data.results);
        })
      );
  }
  getTvShowsImages(id: string) {
    return this.http.get<TvShowImages>(
      `${this.baseURL}/tv/${id}/images?api_key=${this.apiKey}`
    );
  }

  getTvShowsCredits(id: string) {
    return this.http.get<TvShowCredits>(
      `${this.baseURL}/tv/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getTvShowsDetails(id: string) {
    return this.http.get<TvShow>(
      `${this.baseURL}/tv/${id}?api_key=${this.apiKey}`
    );
  }
  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';
    return this.http
      .get<TvShowDto>(
        `${this.baseURL}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((data) => {
          return of(data);
        })
      );
  }

  getTvs(type: string = 'latest', count: number = 12) {
    return this.http
      .get<TvShowDto>(`${this.baseURL}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
}
