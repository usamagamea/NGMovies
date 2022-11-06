import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItem } from '../../models/media-items';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input('mediaItemToWatch') mediaItem: MediaItem | undefined;
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log('Deleting item:' + this.mediaItem?.name);
    this.delete.emit(this.mediaItem);
  }
}
