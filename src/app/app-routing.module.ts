import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UserdashboardComponent } from './shared/components/userdashboard/userdashboard.component';
import { UserComponent } from './shared/components/userdashboard/user/user.component';
import { UserformComponent } from './shared/components/userdashboard/userform/userform.component';
import { ProductdashboardComponent } from './shared/components/productdashboard/productdashboard.component';
import { ProductformComponent } from './shared/components/productdashboard/productform/productform.component';
import { ProductComponent } from './shared/components/productdashboard/product/product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'users',
    component:UserdashboardComponent
  },
  {
    path:'users/addUser',
    component:UserformComponent
  },
  {
    path:'users/:userId',
    component:UserComponent
  },
  {
    path:'users/:userId/edit',
    component:UserformComponent
  },
  {
    path:'products',
    component:ProductdashboardComponent
  },
  {
    path:'products/addProduct',
    component:ProductformComponent
  },
  {
    path:'products/:productId',
    component:ProductComponent
  },
  {
    path:'products/:productId/edit',
    component:ProductformComponent
  },
  {
     path:'fairs',
     component:FairsComponent
  },
  {
    path:'page-not-found',
    component:PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'page-not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
