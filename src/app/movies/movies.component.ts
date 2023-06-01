import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movie: any
  trendingMovies: any[] = [];

  imgPrefix: any = 'https://image.tmdb.org/t/p/w500/';



  constructor(private _MoviesService: MoviesService) {

  }

  getPage(pageNumber:any){

    this._MoviesService.getMoviesBypage(pageNumber).subscribe((x=>{


      this.movie = x.results; 




    }))

  }
}
