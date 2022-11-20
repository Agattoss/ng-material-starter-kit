import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { HolidayService } from '../../services/holiday.service';

@Component({
  selector: 'app-holidays-select-list',
  styleUrls: ['./holidays-select-list.component.scss'],
  templateUrl: './holidays-select-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysSelectListComponent {
  readonly holidays$: Observable<HolidayModel[]> = this._holidayService.getAllHolidays();

  constructor(private _holidayService: HolidayService) {
  }
}
