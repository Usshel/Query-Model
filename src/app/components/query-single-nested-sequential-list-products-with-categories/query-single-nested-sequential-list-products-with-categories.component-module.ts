import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { QuerySingleNestedSequentialListProductsWithCategoriesComponent } from './query-single-nested-sequential-list-products-with-categories.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, MatChipsModule],
  declarations: [QuerySingleNestedSequentialListProductsWithCategoriesComponent],
  providers: [],
  exports: [QuerySingleNestedSequentialListProductsWithCategoriesComponent]
})
export class QuerySingleNestedSequentialListProductsWithCategoriesComponentModule {
}
