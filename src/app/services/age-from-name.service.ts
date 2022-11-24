import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgeFromNameModel } from '../models/age-from-name.model';

@Injectable()
export class AgeFromNameService {
  constructor(private _httpClient: HttpClient) {}

  predictAge(name: string): Observable<AgeFromNameModel> {
    return this._httpClient.get<AgeFromNameModel>(
      '  https://api.agify.io?name=' + name
    );
  }
}
