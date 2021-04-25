import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Home/:categoryId', component: HomePageComponent },
  { path: 'Product/:id', component: ProductDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
