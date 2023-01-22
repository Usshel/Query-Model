import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { ProductMetadataModel } from 'src/app/models/product-metadata.model';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-query-single-nested-accordion-products-with-stock',
  templateUrl: './query-single-nested-accordion-products-with-stock.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleNestedAccordionProductsWithStockComponent {

  readonly products$: Observable<any> = this._productsService.getAllProducts()
  .pipe(
    switchMap((products) => 
    this._productsService
    .getAllProductMetaData(products.map((product) => product.id))
    .pipe(
      (map((metaData) =>
       products.map((product) => this.mapToQueryProduct(product, metaData) )
      )))
    )
  );


  constructor(private _productsService: ProductsService) {
  }


  mapToQueryProduct(product: ProductModel, metaData:Record<string, ProductMetadataModel[]>): any {
    return {
      id: product.id,
      name: product.title,
      price: product.price,
      stock: (metaData[product.id] ?? []).reduce((a,c) => a + c.stock, 0)
    }
  }

}
