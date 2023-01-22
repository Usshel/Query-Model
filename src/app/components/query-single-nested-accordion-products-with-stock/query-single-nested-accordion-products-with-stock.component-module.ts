import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuerySingleNestedAccordionProductsWithStockComponent } from './query-single-nested-accordion-products-with-stock.component';

@NgModule({
  imports: [MatCardModule, MatExpansionModule, CommonModule],
  declarations: [QuerySingleNestedAccordionProductsWithStockComponent],
  providers: [],
  exports: [QuerySingleNestedAccordionProductsWithStockComponent]
})
export class QuerySingleNestedAccordionProductsWithStockComponentModule {
}
