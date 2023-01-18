import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryStringSingleUserComponent } from './components/query-string-single-user/query-string-single-user.component';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryStringSingleUserComponentModule } from './components/query-string-single-user/query-string-single-user.component-module';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-string-single-user', component: QueryStringSingleUserComponent }, { path: 'query-array-single-job', component: QueryArraySingleJobComponent }]), QueryStringSingleUserComponentModule, QueryArraySingleJobComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
