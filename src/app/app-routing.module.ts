import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { HolidaysSelectListComponent } from './components/holidays-select-list/holidays-select-list.component';
import { CategoriesCheckboxListComponent } from './components/categories-checkbox-list/categories-checkbox-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
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
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { UserServiceModule } from './services/user.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'crypto', component: ChipsListComponent },
      { path: 'public-holidays', component: HolidaysSelectListComponent },
      { path: 'checkbox-categories', component: CategoriesCheckboxListComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginFormComponent }
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
    CategoriesMenuComponentModule,
    ProductFormComponentModule,
    EmployeeFormComponentModule,
    EmployeeServiceModule,
    LoginFormComponentModule,
    UserServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
