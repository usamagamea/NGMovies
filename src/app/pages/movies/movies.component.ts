import { ActivatedRoute } from '@angular/router';

import { Movie } from './../../models/movies';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  MoviesPagination = new MatTableDataSource<any>();
  generalId: string | null = null;
  moviesLength: Movie[] = [];
  searchMovie: string | null = null;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.generalId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  ngAfterViewInit() {
    this.MoviesPagination.paginator = this.paginator;
  }

  getPagedMovies(page: number, search?: string) {
    this.moviesService.searchMovies(page, search).subscribe((movies) => {
      this.MoviesPagination.data = movies.results;
      this.moviesLength ? this.moviesLength : movies.total_results;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.MoviesPagination.data = movies;
      this.moviesLength ? this.moviesLength : movies;
    });
  }

  getServerData(event: any) {
    const page = event.pageIndex + 1;
    if (this.generalId) {
      this.getMoviesByGenre(this.generalId, page);
    } else {
      if (this.searchMovie) {
        this.getPagedMovies(page, this.searchMovie);
      } else {
        this.getPagedMovies(page);
      }
    }
  }

  searchMovies() {
    if (this.searchMovie) {
      this.getPagedMovies(1, this.searchMovie);
    }
  }
}
