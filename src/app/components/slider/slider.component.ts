import { ImagesSize } from './../../constant/image-size';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movies';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
      // transition('* => void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  readonly imgPrefix = ImagesSize.original;
  currentSlideIndex: number = 0;

  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length;
      }, 5000);
    }
   
  }
}
