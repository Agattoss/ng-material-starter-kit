import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ProductSearchComponent } from './product-search.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [ProductSearchComponent],
  providers: [],
  exports: [ProductSearchComponent],
})
export class ProductSearchComponentModule { }
