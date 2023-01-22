import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getAllProductsByCategory(category: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
}
