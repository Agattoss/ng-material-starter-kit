import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidaysSelectListComponent } from './holidays-select-list.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule],
  declarations: [HolidaysSelectListComponent],
  providers: [],
  exports: [HolidaysSelectListComponent]
})
export class HolidaysSelectListComponentModule {
}
