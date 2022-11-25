import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardModel } from '../models/card.model';

@Injectable()
export class CardService {
  constructor(private _httpClient: HttpClient) {}

  getCard(id: number): Observable<CardModel> {
    return this._httpClient.get<CardModel>(
      'https://fakestoreapi.com/carts/' + id
    );
  }
}
