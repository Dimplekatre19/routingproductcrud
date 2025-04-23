import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductdashboardComponent } from './shared/components/productdashboard/productdashboard.component';
import { UserdashboardComponent } from './shared/components/userdashboard/userdashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/productdashboard/product/product.component';
import { ProductformComponent } from './shared/components/productdashboard/productform/productform.component';
import { UserComponent } from './shared/components/userdashboard/user/user.component';
import { UserformComponent } from './shared/components/userdashboard/userform/userform.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductdashboardComponent,
    UserdashboardComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProductformComponent,
    UserComponent,
    UserformComponent,
    FairsComponent
  ],
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
