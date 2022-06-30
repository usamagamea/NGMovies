import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../models/movies';
import { Component, Input, OnInit } from '@angular/core';
import { ImagesSize } from 'src/app/constant/image-size';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  readonly imgPrefix = ImagesSize.medium;
  @Input() itemData: Movie | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id');
  }
}
