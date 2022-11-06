import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MediaItem } from '../models/media-items';
import { AuthService } from './../../services/auth.service';
import { CatDto } from './../models/list';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiDomain = environment.apiDomain;
  authToken = this.auth.token;
  headers = new HttpHeaders().set('Authorization', `bearer${this.authToken}`);
  constructor(private http: HttpClient, private auth: AuthService) {}
  createForm(form: MediaItem): Observable<MediaItem[]> {
    const url = `${this.apiDomain + '/api/movies'}`;
    return this.http.post(url, form, { headers: this.headers }).pipe(
      map((res) => {
        return res as MediaItem[];
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  getMovies(): Observable<CatDto[]> {
    const url = `${this.apiDomain + '/api/category'}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      switchMap((data) => {
        return of(data as CatDto[]);
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  updateForm(data: any) {
    return this.http.post(`${this.apiDomain}/api/movies/2`, data);
  }
  deleteMovie(id: any) {
    return this.http.delete(`${this.apiDomain}/api/movies/${id}`);
  }
}
