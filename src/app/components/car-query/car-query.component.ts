import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { CarModel } from '../../models/car.model';
import { BrandModel } from '../../models/brand.model';
import { ComfortFeatureModel } from '../../models/comfort-feature.model';
import { CarUserModel } from '../../models/car-user.model';
import { CarsService } from '../../services/cars.service';
import { UserQueryModel } from 'src/app/query-models/user.query-model';

@Component({
  selector: 'app-car-query',
  templateUrl: './car-query.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarQueryComponent {
  readonly cars$: Observable<CarModel[]> = this._carsService.getAllCars();
  readonly brands$: Observable<BrandModel[]> = this._carsService.getAllCarBrands();
  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = this._carsService.getAllCF();
  readonly users$: Observable<CarUserModel[]> = this._carsService.Users;

  readonly usersWithCars$: Observable<UserQueryModel[]> = combineLatest([
    this.users$,
    this.cars$,
    this.brands$,
    this.comfortFeatures$,
  ]).pipe(
    map(([users,cars,brands,cfs]) => {
      //----1----
      // return users.map((user) => {
      //   const car: CarModel = this._getCarForUser(user, cars);
      //   return {
      //     userName: user.name,
      //     model: car.model,
      //     brand: this._getBrandForCar(car,brands),
      //     comfortFeatures: this._getComfortFeaturesForCar(car,cfs)
      //   }
      // });

      //2
      // return users.map((user) => 
      // this._mapToNewUserQueryModel(user, cars, brands, cfs)
      // );

      //3
      return this._mapToNewUserQueryModel2(users, cars, brands, cfs)




    })
  )
    //----1----
  private _getCarForUser(user: CarUserModel, cars: CarModel[]): CarModel {
    const carMap = cars.reduce((a, c) => ({...a, [c.id]: c}), {}) as Record<string,CarModel>
    

    return carMap[user.carId]
  }
  private _getBrandForCar(car:CarModel,brands:BrandModel[]): string {
    const brandMap = brands.reduce((a,c) => ({...a, [c.id]: c}), {}) as Record<string,BrandModel>
    
    return brandMap[car.brandId]?.name
  }
  private _getComfortFeaturesForCar(car:CarModel,cfs:ComfortFeatureModel[]): string[]{
    const comfortFMap = cfs.reduce((a,c) => ({...a, [c.id]: c}), {}) as Record<string,ComfortFeatureModel>
    
    
    return (car.comfortFeaturesIds ?? []).map((cfId) => comfortFMap[cfId]?.name)
  }
//-------------------------------------------
  //----2----
  private _mapToNewUserQueryModel(
    user: CarUserModel,
    cars: CarModel[],
    brands: BrandModel[],
    cfs: ComfortFeatureModel[]
  ): UserQueryModel {
    const carMap = cars.reduce((a, c) => ({...a, [c.id]: c}), {}) as Record<string,CarModel>

    const brandMap = brands.reduce((a,c) => ({...a, [c.id]: c}), {}) as Record<string,BrandModel>

    const comfortFMap = cfs.reduce((a,c) => ({...a, [c.id]: c}), {}) as Record<string,ComfortFeatureModel>

    const car: CarModel = carMap[user.carId];
    
    return {
      userName: user.name,
      model: car.model,
      brand: brandMap[car.brandId]?.name,
      comfortFeatures: car.comfortFeaturesIds.map((cfId)=> comfortFMap[cfId]?.name)

    }

  }
//---------------------------------------------------

  private _mapToNewUserQueryModel2(
    users: CarUserModel[],
    cars: CarModel[],
    brands: BrandModel[],
    cfs: ComfortFeatureModel[]
  ): UserQueryModel[] {
    const carMap = cars.reduce((a, c) => ({...a, [c.id]: c}), {}) as Record<string,CarModel>

    const brandMap = brands.reduce((a,c) => ({...a, [c.id]: c}), {}) as Record<string,BrandModel>

    const comfortFMap = cfs.reduce((a,c) => ({...a, [c.id]: c}), {}) as Record<string,ComfortFeatureModel>

    return users.map((user) => {
      const car: CarModel = carMap[user.carId];
        return {
          userName: user.name,
          model: car.model,
          brand: brandMap[car.brandId]?.name,
          comfortFeatures: (car.comfortFeaturesIds ?? []).map((cfId) => comfortFMap[cfId]?.name)
        }

    } )  

  }




  constructor(private _carsService: CarsService) {
  }
}
