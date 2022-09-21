import { Item } from './../../models/movies';
import { Component, Input, OnInit } from '@angular/core';
import { ImagesSize } from 'src/app/constant/image-size';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  readonly imgPrefix = ImagesSize.medium;
  @Input() itemData: Item | null = null;

  constructor() {}

  ngOnInit(): void {}
}
