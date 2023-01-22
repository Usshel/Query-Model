import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, forkJoin, from, pipe, of } from 'rxjs';
import { concatMap, map, scan, switchMap, tap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductWithOtherProductsQueryModel } from '../../query-models/product-with-other-products.query-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-query-single-nested-sequential-list-products-with-categories',
  templateUrl: './query-single-nested-sequential-list-products-with-categories.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleNestedSequentialListProductsWithCategoriesComponent {

  readonly allProducts$: Observable<ProductModel[]> = this._productsService.getAllProducts();
  readonly productsByCategory$: Observable<ProductModel[]> = this._productsService.getAllProductsByCategory('jewelery');

  private _pushedInTimeProductsSubject: Subject<ProductWithOtherProductsQueryModel[]> = new Subject<ProductWithOtherProductsQueryModel[]>();
  public pushedInTimeProducts$: Observable<ProductWithOtherProductsQueryModel[]> = this._pushedInTimeProductsSubject.asObservable();

  readonly emmitedValues: any[] = []
  readonly emmitedValueObservable: Observable<any[]> = of(this.emmitedValues)

  readonly loadingListSequentially$: Observable<ProductWithOtherProductsQueryModel> = 
  this._productsService.getAllProducts().pipe(
     switchMap(( products ) => 
       from(products).pipe(
         concatMap((product) =>  
           this._productsService.getAllProductsByCategory(product.category).pipe(
             map((productsByCategory) => ({
               product: product,
               otherProducts: productsByCategory
            }))
          ) 
        )
       )
     )
   )

   readonly loadingListSequentiallyWithToSub$: Observable<ProductWithOtherProductsQueryModel[]> = this.loadingListSequentially$.pipe(
    scan((a:ProductWithOtherProductsQueryModel[], c) => [...a, c], [])
   ) 
   

  
  // public loadingListSequentially$: Observable<ProductWithOtherProductsQueryModel[]> = this._productsService.getAllProducts().pipe(
  //   switchMap((products) =>
  //     forkJoin(products.map((product) =>
  //       this._productsService.getAllProductsByCategory(product.category)
  //         .pipe(map((productsByCategory) => ({
  //           product: product,
  //           otherProducts: productsByCategory
  //         })) 
  //       ),
  //       )
  //     )
  //   )
  // )
  
  /* Observable<ProductWithOtherProductsQueryModel> = 
  this._productsService.getAllProducts().pipe(
     switchMap(( products ) => 
       from(products).pipe(
         concatMap((product) =>  
           this._productsService.getAllProductsByCategory(product.category).pipe(
             map((productsByCategory) => ({
               product: product,
               otherProducts: productsByCategory
             }))
           ) 
        )
       )
     ) 
   ); */

  //  !or "switchMap" instead of "concatMap"
  constructor(private _productsService: ProductsService) {
  }
  

}
//from vs of
  //"FROM" makes an Array of variables an a Observable and it's iritate through every element - needed only one map opearator to map an single element
  //"OF" makes an Array of variables an a Observable and it's does not iritate through every element  - needed two map opeartors to map an single element



//combineLatest vs swtichMap vs concatMap vs forkJoin


/*forkJoin emmits the values only if every observable inside a forkJoin operator has been completed.
  !!!emmits only once it won't emmits again if some of variable will be changed!!!!
*/

/*concatMap works like: maps each value of first Observable with every value from second Observable and emmits every single object of Array not the whole Array
 ex. 
  first observable Humans, second observable is cloths(hat,pants,shirt) - 
  --     Human 1: Hat-1, pants-1, shirt-1 ;NEXT;
  --     Human 1: Hat-2, pants-2, shirt-2 ;NEXT;
  --     Human 2: Hat-1, pants-1, shirt-1 ;NEXT;
  --     Human 2: Hat-2, pants-2, shirt-2
*/
