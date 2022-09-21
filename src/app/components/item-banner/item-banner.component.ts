import { Component, Input } from '@angular/core';
import { Item } from '../../models/movies';

@Component({
  selector: 'item-banner',
  templateUrl: './item-banner.component.html',
})
export class ItemBannerComponent {
  @Input() items: Item[] = [];
  @Input() title: string = '';
}
