import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { TvShow } from 'src/app/models/tv';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  TvPagination = new MatTableDataSource<any>();
  generalId: string | null = null;
  TVLength: TvShow[] = [];
  searchTvShows: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private TvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.generalId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getPagedTvs(1);
      }
    });
  }
  ngAfterViewInit() {
    this.TvPagination.paginator = this.paginator;
  }

  getPagedTvs(page: number, search?: string) {
    this.TvShowsService.searchTvShows(page, search).subscribe((tvShows) => {
      this.TvPagination.data = tvShows.results;
      this.TVLength ? this.TVLength : tvShows.total_results;
    });
  }

  getTvShowsByGenre(genreId: string, page: number) {
    this.TvShowsService.getTvShowsByGenre(genreId, page).subscribe(
      (tvShows) => {
        this.TvPagination.data = tvShows;
        this.TVLength ? this.TVLength : tvShows;
      }
    );
  }

  getServerData(event: any) {
    const page = event.pageIndex + 1;
    if (this.generalId) {
      this.getTvShowsByGenre(this.generalId, page);
    } else {
      if (this.searchTvShows) {
        this.getPagedTvs(page, this.searchTvShows);
      } else {
        this.getPagedTvs(page);
      }
    }
  }

  SearchTvShows() {
    if (this.searchTvShows) {
      this.getPagedTvs(1, this.searchTvShows);
    }
  }
}
