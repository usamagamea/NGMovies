import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

popularMovies: Movie[]=[]
upcomingMovies: Movie[]=[]
topRatedMovies: Movie[]=[]
tvShows : Movie[]=[]

 

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {

    this.moviesService.getMovies('popular').subscribe((Movies)=>{
      this.popularMovies = Movies
    })
    this.moviesService.getMovies('upcoming').subscribe((Movies)=>{
      this.upcomingMovies = Movies
     
    })
    this.moviesService.getMovies('top_rated').subscribe((Movies)=>{
      this.topRatedMovies = Movies
     
    })
    this.moviesService.getTvShows('airing_today').subscribe((Movies)=>{
      this.tvShows = Movies
     
    })

  }

}
