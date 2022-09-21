import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/movies';
import { TvShow } from 'src/app/models/tv';

@Component({
  selector: 'item-banner-tv',
  templateUrl: './item-banner-tv.component.html',
})
export class ItemBannerTvComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() itemsTv: TvShow[] = [];
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
