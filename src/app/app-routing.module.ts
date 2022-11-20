import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { HolidaysSelectListComponent } from './components/holidays-select-list/holidays-select-list.component';
import { CategoriesCheckboxListComponent } from './components/categories-checkbox-list/categories-checkbox-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ChipsListComponentModule } from './components/chips-list/chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidaysSelectListComponentModule } from './components/holidays-select-list/holidays-select-list.component-module';
import { HolidayServiceModule } from './services/holiday.service-module';
import { CategoriesCheckboxListComponentModule } from './components/categories-checkbox-list/categories-checkbox-list.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'crypto', component: ChipsListComponent },
      { path: 'public-holidays', component: HolidaysSelectListComponent },
      { path: 'checkbox-categories', component: CategoriesCheckboxListComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent }
    ]),
    ProductListComponentModule,
    ProductServiceModule,
    CategoriesListComponentModule,
    CategoryServiceModule,
    ChipsListComponentModule,
    CryptoServiceModule,
    HolidaysSelectListComponentModule,
    HolidayServiceModule,
    CategoriesCheckboxListComponentModule,
    CategoriesMenuComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
