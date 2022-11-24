import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserCreationModel } from '../../models/user-creation.model';
import { UserCreationService } from '../../services/user-creation.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  readonly user$: Observable<UserCreationModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._userService.getUser(data['id']))
    );

  constructor(
    private _userCreationService: UserCreationService,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
