import { Component, Input, OnInit } from '@angular/core';
import { ImagesSize } from 'src/app/constant/image-size';
import { Item } from 'src/app/models/movies';
import { TvShow } from 'src/app/models/tv';

@Component({
  selector: 'item-tv',
  templateUrl: './item-tv.component.html',
  styleUrls: ['./item-tv.component.scss'],
})
export class ItemTvComponent implements OnInit {
  readonly imgPrefix = ImagesSize.medium;
  @Input() itemData: Item | null = null;

  constructor() {}

  ngOnInit(): void {}
}
