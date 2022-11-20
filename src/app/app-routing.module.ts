import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ChipsListComponentModule } from './components/chips-list/chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'crypto', component: ChipsListComponent }]), ProductListComponentModule, ProductServiceModule, CategoriesListComponentModule, CategoryServiceModule, ChipsListComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
