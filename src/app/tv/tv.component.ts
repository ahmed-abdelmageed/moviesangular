import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {

  tv: any
  trendingMovies: any[] = [];

  imgPrefix: any = 'https://image.tmdb.org/t/p/w500/';



  constructor(private _MoviesService: MoviesService) {

  }

  getPage(pageNumber:any){

    this._MoviesService.getTvBypage(pageNumber).subscribe((x=>{


      this.tv = x.results; 




    }))

  }
}
