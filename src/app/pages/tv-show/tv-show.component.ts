import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  Item,
  mapTvShowToItem,
  TvShow,
  TvShowCredits,
  TvShowImages,
  TvShowVideo,
} from '../../models/tv';
import { TvShowsService } from './../../services/tv-shows.service';
import { ImagesSize } from './../../constant/image-size';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
})
export class TvShowComponent implements OnInit, OnDestroy {
  tv: TvShow | null = null;
  tvShows: TvShow[] = [];
  tvVideo: TvShowVideo[] = [];
  tvShowBanner: Item | null = null;
  tvImages: TvShowImages | null = null;
  tvCredits: TvShowCredits | null = null;
  similarTv: TvShow[] = [];
  picSize = ImagesSize;
  unSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private tvService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getTvShows(id);
      this.getTvShowsCredits(id);
      this.getTvShowsVideos(id);
      this.getTvShowsImages(id);
      this.getSimilarTvShows(id);
    });
  }
  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
  getTvShows(id: string) {
    this.tvService.getTvShow(id).subscribe((tvData) => {
      this.tvShowBanner = mapTvShowToItem(tvData);
      this.tv = tvData;
    });
  }
  getTvShowsCredits(id: string) {
    this.tvService.getTvShowsCredits(id).subscribe((creditsData) => {
      this.tvCredits = creditsData;
    });
  }

  getTvShowsVideos(id: string) {
    this.tvService.getTvShowsVideos(id).subscribe((tvVideoData) => {
      this.tvVideo = tvVideoData;
    });
  }
  getTvShowsImages(id: string) {
    this.tvService.getTvShowsImages(id).subscribe((tvImageData) => {
      this.tvImages = tvImageData;
    });
  }
  getSimilarTvShows(id: string) {
    this.tvService.getTvShowsSimilar(id).subscribe((similarTVData) => {
      this.similarTv = similarTVData;
    });
  }
}
