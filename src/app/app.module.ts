import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { ItemBannerComponent } from './components/item-banner/item-banner.component';
import { ItemComponent } from './components/item/item.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MovieComponent } from './pages/movie/movie.component';
import { TabViewModule } from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { ItemTvComponent } from './components/item-tv/item-tv.component';
import { ItemBannerTvComponent } from './components/item-banner-tv/item-banner-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    SliderComponent,
    ItemBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    TvShowComponent,
    ItemTvComponent,
    ItemBannerTvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
