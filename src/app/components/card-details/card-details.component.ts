import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CardModel } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  readonly card$: Observable<CardModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._cardService.getCard(data['id']))
  );
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cardService: CardService
  ) {}
}
