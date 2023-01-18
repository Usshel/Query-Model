import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryStringSingleUserComponent } from './components/query-string-single-user/query-string-single-user.component';
import { QueryStringSingleUserComponentModule } from './components/query-string-single-user/query-string-single-user.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-string-single-user', component: QueryStringSingleUserComponent }]), QueryStringSingleUserComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
