import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreationModel } from '../models/user-creation.model';

@Injectable()
export class UserCreationService {
  constructor(private _httpClient: HttpClient) {}

  createUser(
    user: Omit<UserCreationModel, 'geolocation'>
  ): Observable<UserCreationModel> {
    return this._httpClient.post<UserCreationModel>(
      'https://fakestoreapi.com/users',
      user
    );
  }
}
