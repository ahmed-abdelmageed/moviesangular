import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  imgPrefix: string = 'http://image.tmdb.org/t/p/w500/'


  constructor(private _MoviesService: MoviesService) {


    _MoviesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results.slice(0,10);
    })


    _MoviesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0,10);
    })

    _MoviesService.getTrending('person').subscribe((data) => {
      this.trendingPeople = data.results.slice(0,10);
    })
  }

}
