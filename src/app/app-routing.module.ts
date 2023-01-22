import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryStringSingleUserComponent } from './components/query-string-single-user/query-string-single-user.component';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryStringMultiUserComponent } from './components/query-string-multi-user/query-string-multi-user.component';
import { QueryLoaderNamesComponent } from './components/query-loader-names/query-loader-names.component';
import { QuerySingleNestedSequentialListProductsWithCategoriesComponent } from './components/query-single-nested-sequential-list-products-with-categories/query-single-nested-sequential-list-products-with-categories.component';
import { QueryMultiNestedAccordionOrganizationsComponent } from './components/query-multi-nested-accordion-organizations/query-multi-nested-accordion-organizations.component';
import { QuerySingleNestedAccordionProductsWithStockComponent } from './components/query-single-nested-accordion-products-with-stock/query-single-nested-accordion-products-with-stock.component';
import { QueryStringSingleUserComponentModule } from './components/query-string-single-user/query-string-single-user.component-module';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { QueryStringMultiUserComponentModule } from './components/query-string-multi-user/query-string-multi-user.component-module';
import { QueryLoaderNamesComponentModule } from './components/query-loader-names/query-loader-names.component-module';
import { QuerySingleNestedSequentialListProductsWithCategoriesComponentModule } from './components/query-single-nested-sequential-list-products-with-categories/query-single-nested-sequential-list-products-with-categories.component-module';
import { QueryMultiNestedAccordionOrganizationsComponentModule } from './components/query-multi-nested-accordion-organizations/query-multi-nested-accordion-organizations.component-module';
import { QuerySingleNestedAccordionProductsWithStockComponentModule } from './components/query-single-nested-accordion-products-with-stock/query-single-nested-accordion-products-with-stock.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'query-string-single-user', component: QueryStringSingleUserComponent },
    { path: 'query-array-single-job', component: QueryArraySingleJobComponent },
    { path: 'query-string-multi-user', component: QueryStringMultiUserComponent },
    { path: 'query-loader-names', component: QueryLoaderNamesComponent },
    { path: 'product-with-products-by-categories', component: QuerySingleNestedSequentialListProductsWithCategoriesComponent },
    { path: 'query-multi-nested-accordion-organizations', component: QueryMultiNestedAccordionOrganizationsComponent },
    { path: 'query-single-nested-accordion-products-with-stock', component: QuerySingleNestedAccordionProductsWithStockComponent }
  ]), QueryStringSingleUserComponentModule, QueryArraySingleJobComponentModule, QueryStringMultiUserComponentModule, QueryLoaderNamesComponentModule, QuerySingleNestedSequentialListProductsWithCategoriesComponentModule, QueryMultiNestedAccordionOrganizationsComponentModule, QuerySingleNestedAccordionProductsWithStockComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
