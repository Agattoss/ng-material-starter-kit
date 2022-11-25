import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CardDetailsComponent } from './card-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonToggleModule],
  declarations: [CardDetailsComponent],
  providers: [],
  exports: [CardDetailsComponent]
})
export class CardDetailsComponentModule {
}
