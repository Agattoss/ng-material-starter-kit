import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CryptoModel} from "../models/crypto.model";

@Injectable()
export class CryptoService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllChips(): Observable<CryptoModel[]> {
    return this._httpClient.get<CryptoModel[]>('https://api2.binance.com/api/v3/ticker/24hr')
  }
}
