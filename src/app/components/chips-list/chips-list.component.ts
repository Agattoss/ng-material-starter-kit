import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoService } from '../../services/crypto.service';
import {CryptoModel} from "../../models/crypto.model";

@Component({
  selector: 'app-chips-list',
  styleUrls: ['./chips-list.component.scss'],
  templateUrl: './chips-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsListComponent {
  readonly chips$: Observable<CryptoModel[]> = this._cryptoService.getAllChips();

  constructor(private _cryptoService: CryptoService) {
  }
}
