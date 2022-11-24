import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgeFromNameComponent } from './age-from-name.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [AgeFromNameComponent],
  providers: [],
  exports: [AgeFromNameComponent]
})
export class AgeFromNameComponentModule {
}
