import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  error: any;
  login(loginForm: FormGroup) {
    if (loginForm.valid) {
      this._AuthService.signIn(loginForm.value).subscribe((x) => {
        if (x.message == 'success') {

          localStorage.setItem('userToken', x.token);
          this._AuthService.saveCurrentUser();
          this._Router.navigate(['/home']);
        } else {
          console.log('hell');
          this.error = x.message;
        }
      });
    }
  }

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void { }
}
