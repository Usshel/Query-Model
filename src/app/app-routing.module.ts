import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryStringSingleUserComponent } from './components/query-string-single-user/query-string-single-user.component';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryStringMultiUserComponent } from './components/query-string-multi-user/query-string-multi-user.component';
import { QueryLoaderNamesComponent } from './components/query-loader-names/query-loader-names.component';
import { QueryStringSingleUserComponentModule } from './components/query-string-single-user/query-string-single-user.component-module';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { QueryStringMultiUserComponentModule } from './components/query-string-multi-user/query-string-multi-user.component-module';
import { QueryLoaderNamesComponentModule } from './components/query-loader-names/query-loader-names.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'query-string-single-user', component: QueryStringSingleUserComponent },
    { path: 'query-array-single-job', component: QueryArraySingleJobComponent },
    { path: 'query-string-multi-user', component: QueryStringMultiUserComponent },
    { path: 'query-loader-names', component: QueryLoaderNamesComponent }
  ]), QueryStringSingleUserComponentModule, QueryArraySingleJobComponentModule, QueryStringMultiUserComponentModule, QueryLoaderNamesComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
