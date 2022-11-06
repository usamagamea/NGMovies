import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieAddComponent } from './pages/movie-add/movie-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieItemComponent } from './pages/movie-item/movie-item.component';
import { MovieShowComponent } from './pages/movie-show/movie-show.component';

@NgModule({
  declarations: [MovieAddComponent, MovieItemComponent, MovieShowComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [MovieAddComponent, MovieItemComponent, MovieShowComponent],
})
export class CrudMovieModule {}
