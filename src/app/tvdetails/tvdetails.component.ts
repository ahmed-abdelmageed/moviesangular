import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {

  id: string = ' ';
  tvDetailes:any = {};
  imgPrefix: string = 'http://image.tmdb.org/t/p/w500/';


  constructor(private _ActivatedRoute: ActivatedRoute ,private _MoviesService:MoviesService) {
    this.id = _ActivatedRoute.snapshot.params['id'];

    _MoviesService.getTvDetails(this.id).subscribe((response)=>{

      this.tvDetailes = response;


    })
  }

}
