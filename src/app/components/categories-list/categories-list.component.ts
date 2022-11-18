import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-categories-list',
  styleUrls: ['./categories-list.component.scss'],
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  readonly categoryList$: Observable<ProductModel[]> = this._categoryService.getAllCategories()

  constructor(private _categoryService: CategoryService) {
  }
}
