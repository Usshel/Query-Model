import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { QueryStringSingleUserComponent } from './query-string-single-user.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule],
  declarations: [QueryStringSingleUserComponent],
  providers: [],
  exports: [QueryStringSingleUserComponent]
})
export class QueryStringSingleUserComponentModule {
}
