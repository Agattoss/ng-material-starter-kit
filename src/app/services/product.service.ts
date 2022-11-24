import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductCreationModel } from '../models/product-creation.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      'https://fakestoreapi.com/products'
    );
  }

  create(
    product: Omit<ProductCreationModel, 'id'>
  ): Observable<ProductCreationModel> {
    return this._httpClient.post<ProductCreationModel>(
      'https://fakestoreapi.com/products',
      product
    );
  }
  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(
      `https://fakestoreapi.com/products/${id}`
    );
  }
}
