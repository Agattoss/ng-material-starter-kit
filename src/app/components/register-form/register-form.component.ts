import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserCreationService } from '../../services/user-creation.service';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private _userCreationService: UserCreationService) {}

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._userCreationService
      .createUser({
        email: registerForm.get('email')?.value,
        username: registerForm.get('user')?.value,
        password: registerForm.get('password')?.value,
        name: {
          firstname: registerForm.get('firstname')?.value,
          lastname: registerForm.get('lastname')?.value,
        },
        address: {
          city: registerForm.get('city')?.value,
          street: registerForm.get('street')?.value,
          number: registerForm.get('number')?.value,
          zipcode: registerForm.get('zipcode')?.value,
          geolocation: {
            lat: '',
            long: '',
          },
        },
        phone: registerForm.get('phone')?.value,
      })
      .subscribe();
  }
}
