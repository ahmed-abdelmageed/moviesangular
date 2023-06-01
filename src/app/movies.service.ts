import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }

  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=cb9d54251bfb16d22a9165b924cf3c91`)

  }

  getMovieDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cb9d54251bfb16d22a9165b924cf3c91`)

  }

  getTvDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=cb9d54251bfb16d22a9165b924cf3c91`)

  }
  getMoviesBypage(pageNum:number):Observable<any>{
    return this._HttpClient.get( `https://api.themoviedb.org/3/movie/popular?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${pageNum}`)
  }

  getTvBypage(pageNum:number):Observable<any>{
    return this._HttpClient.get( `https://api.themoviedb.org/3/tv/popular?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${pageNum}`)
  }

}
