import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('userToken') != null) {

      this.saveCurrentUser();

    }
  }

  currentUser = new BehaviorSubject(null);

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token))
    console.log(this.currentUser);
  }

  register(formData: any): Observable<any> {

    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signup', formData);
  }
  signIn(login: any): Observable<any> {
    return this._HttpClient.post("https://sticky-note-fe.vercel.app/signin", login)
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this['_Router'].navigate(['/login']);
  }
}
