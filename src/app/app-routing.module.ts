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
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgeFromNameComponent } from './components/age-from-name/age-from-name.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ActivityComponent } from './components/activity/activity.component';
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
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UserCreationServiceModule } from './services/user-creation.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgeFromNameComponentModule } from './components/age-from-name/age-from-name.component-module';
import { AgeFromNameServiceModule } from './services/age-from-name.service-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { CardDetailsComponentModule } from './components/card-details/card-details.component-module';
import { CardServiceModule } from './services/card.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { ActivityComponentModule } from './components/activity/activity.component-module';
import { ActivityServiceModule } from './services/activity.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'crypto', component: ChipsListComponent },
      { path: 'public-holidays', component: HolidaysSelectListComponent },
      {
        path: 'checkbox-categories',
        component: CategoriesCheckboxListComponent,
      },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cat-fact', component: CatFactComponent },
      { path: 'age/:name', component: AgeFromNameComponent },
      { path: 'product-search', component: ProductSearchComponent },
      { path: 'card/:id', component: CardDetailsComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      { path: 'activity/:type', component: ActivityComponent },
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
    UserServiceModule,
    RegisterFormComponentModule,
    UserCreationServiceModule,
    ProductDetailComponentModule,
    CatFactComponentModule,
    CatFactServiceModule,
    AgeFromNameComponentModule,
    AgeFromNameServiceModule,
    ProductSearchComponentModule,
    CardDetailsComponentModule,
    CardServiceModule,
    UserDetailsComponentModule,
    ActivityComponentModule,
    ActivityServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
