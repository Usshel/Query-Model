import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { QueryLoaderNamesComponent } from './query-loader-names.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, MatProgressSpinnerModule, MatButtonToggleModule],
  declarations: [QueryLoaderNamesComponent],
  providers: [],
  exports: [QueryLoaderNamesComponent]
})
export class QueryLoaderNamesComponentModule {
}
