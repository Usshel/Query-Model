import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CarUserModel } from '../models/car-user.model';
import { ComfortFeatureModel } from '../models/comfort-feature.model';
import { CarModel } from '../models/car.model';
import { BrandModel } from '../models/brand.model';


@Injectable({ providedIn: 'root' })
export class CarsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllCarBrands(): Observable<BrandModel[]> {
    return this._httpClient.get<BrandModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands');
  }

  getAllCF(): Observable<ComfortFeatureModel[]> {
    return this._httpClient.get<ComfortFeatureModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features');
  }

  getAllCars(): Observable<CarModel[]> {
    return this._httpClient.get<CarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cars');
  }

    Users: Observable<CarUserModel[]> = of([
    {
        id: 1,
        name: 'Adam',
        age: 25,
        carId: '3'
    },
    {
        id: 2,
        name: 'Jakub',
        age: 31,
        carId: '4'
    },
    {
        id: 3,
        name: 'Heny',
        age: 65,
        carId: '5'
    },
    {
        id: 4,
        name: 'Carol',
        age: 20,
        carId: '6'
    },
    {
        id: 5,
        name: 'Michael',
        age: 10,
        carId: '45'
    },

  ])

}

