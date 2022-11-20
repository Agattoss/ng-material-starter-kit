import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-checkbox-list',
  styleUrls: ['./categories-checkbox-list.component.scss'],
  templateUrl: './categories-checkbox-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesCheckboxListComponent {
  readonly categoryList$: Observable<string[]> =
    this._categoryService.getAllCategories();

  constructor(private _categoryService: CategoryService) {}
}
