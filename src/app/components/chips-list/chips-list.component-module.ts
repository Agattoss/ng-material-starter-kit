import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsListComponent } from './chips-list.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, MatChipsModule],
  declarations: [ChipsListComponent],
  providers: [],
  exports: [ChipsListComponent]
})
export class ChipsListComponentModule {
}
