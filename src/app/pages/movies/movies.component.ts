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
  movies = new MatTableDataSource<any>();
  // @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  moviesLength!: number;

  // movies2: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
    //   if (genreId) {
    //     this.getMoviesByGenre(genreId);
    //   } else {
    //   }
    // });
    this.getPagedMovies(1);
  }

  ngAfterViewInit() {
    this.movies.paginator = this.paginator;
  }

  getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies.data = movies.results;
      this.moviesLength ? this.moviesLength : movies.total_results;
    });
  }

  // getMoviesByGenre(genreId: string) {
  //   this.moviesService.getMoviesByGenre(genreId).subscribe((movies) => {
  //     // this.movies.data = movies;
  //     this.movies.data = movies;

  //     this.moviesLength ? this.moviesLength : movies;
  //   });
  // }

  getServerData(event: any) {
    this.getPagedMovies(event.pageIndex + 1);
  }
}
