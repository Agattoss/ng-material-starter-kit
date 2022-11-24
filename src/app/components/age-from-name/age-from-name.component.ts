import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgeFromNameModel } from '../../models/age-from-name.model';
import { AgeFromNameService } from '../../services/age-from-name.service';

@Component({
  selector: 'app-age-from-name',
  templateUrl: './age-from-name.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgeFromNameComponent {
  readonly details$: Observable<AgeFromNameModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._ageFromNameService.predictAge(data['name']))
    );

  constructor(
    private _ageFromNameService: AgeFromNameService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
