import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserCreationModel } from '../models/user-creation.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  logUser(user: UserModel): Observable<UserModel> {
    return this._httpClient.post<UserModel>(
      'https://fakestoreapi.com/auth/login',
      user
    );
  }

  getUser(id: number): Observable<UserCreationModel> {
    return this._httpClient.get<UserCreationModel>(
      'https://fakestoreapi.com/users/' + id
    );
  }
}
