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

    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(15), Validators.max(80)]),
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
