import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { QueryStringMultiUserComponent } from './query-string-multi-user.component';

@NgModule({
  imports: [MatCardModule, MatGridListModule, CommonModule],
  declarations: [QueryStringMultiUserComponent],
  providers: [],
  exports: [QueryStringMultiUserComponent]
})
export class QueryStringMultiUserComponentModule {
}
