import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { GestionProductComponent } from './gestion-product/gestion-product.component';

import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { SearchfiltrePipe } from './searchfiltre.pipe';
import { ListLivreryComponent } from './list-livrery/list-livrery.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { AjoutLivraisonComponent } from './ajout-livraison/ajout-livraison.component';
import { ListLivraisonComponent } from './list-livraison/list-livraison.component';
import { EditLivraisonComponent } from './edit-livraison/edit-livraison.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidbarComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent,
    GestionProductComponent,

    CategoryListComponent,

    AddCategoryComponent,

    UpdateCategoryComponent,

    StockListComponent,

    AddStockComponent,

    UpdateStockComponent,

    SearchfiltrePipe,

    ListLivreryComponent,


    CreateDeliveryComponent,


    EditDeliveryComponent,


    AjoutLivraisonComponent,


    ListLivraisonComponent,


    EditLivraisonComponent,


    ListReclamationComponent,


    AddReclamationComponent,


    EditReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
