import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  error: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  registerForm = new FormGroup({

    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    rePassword: new FormControl(null, [Validators.required]),
  })


  submitRegisterForm(registerForm: FormGroup) {
    this._AuthService.register(registerForm.value).subscribe((response) => {

      if (response.message == 'success') {
        this._Router.navigate(['/login'])
      }
      else {
        this.error = response.errors.email.message
      }

    })
  }


}
