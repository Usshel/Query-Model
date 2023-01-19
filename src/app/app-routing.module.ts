import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryStringSingleUserComponent } from './components/query-string-single-user/query-string-single-user.component';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryStringMultiUserComponent } from './components/query-string-multi-user/query-string-multi-user.component';
import { QueryStringSingleUserComponentModule } from './components/query-string-single-user/query-string-single-user.component-module';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { QueryStringMultiUserComponentModule } from './components/query-string-multi-user/query-string-multi-user.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'query-string-single-user', component: QueryStringSingleUserComponent }, 
     { path: 'query-array-single-job', component: QueryArraySingleJobComponent },
      { path: 'query-string-multi-user', component: QueryStringMultiUserComponent }]), QueryStringSingleUserComponentModule, QueryArraySingleJobComponentModule, QueryStringMultiUserComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
