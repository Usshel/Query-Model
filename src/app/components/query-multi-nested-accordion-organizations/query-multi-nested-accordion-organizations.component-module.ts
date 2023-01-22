import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { QueryMultiNestedAccordionOrganizationsComponent } from './query-multi-nested-accordion-organizations.component';

@NgModule({
  imports: [MatCardModule, MatExpansionModule, CommonModule],
  declarations: [QueryMultiNestedAccordionOrganizationsComponent],
  providers: [],
  exports: [QueryMultiNestedAccordionOrganizationsComponent]
})
export class QueryMultiNestedAccordionOrganizationsComponentModule {
}
