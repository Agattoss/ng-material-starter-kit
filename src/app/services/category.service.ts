import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllCategories(): Observable<any> {
    return this._httpClient.get('https://fakestoreapi.com/products/categories')
  }
}
