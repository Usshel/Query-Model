import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductMetadataModel } from '../models/product-metadata.model';

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

  getAllProductMetaData(ids: string[]): Observable<Record<string,ProductMetadataModel[]>> {
    return forkJoin(
      ids.map((id) => 
        this._httpClient.get<ProductMetadataModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/products/${id}/product-metadata`)) // endpoint above 10 does not exist how to workaround? catchError?
        ).pipe(
          map((metadata: ProductMetadataModel[][]) => 
          metadata.reduce((a, c, idx) => ({ ...a, [ids[idx]]: c }), {} as Record<string,ProductMetadataModel[]>))
      );
  }
}
