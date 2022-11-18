import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoriesListComponent } from './categories-list.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, MatButtonToggleModule, MatGridListModule],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
