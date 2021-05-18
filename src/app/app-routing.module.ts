import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AjoutLivraisonComponent } from './ajout-livraison/ajout-livraison.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { EditLivraisonComponent } from './edit-livraison/edit-livraison.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { HomeComponent } from './home/home.component';
import { ListLivraisonComponent } from './list-livraison/list-livraison.component';
import { ListLivreryComponent } from './list-livrery/list-livrery.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';



const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "product-list", component: ProductListComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "update-product/:id", component: UpdateProductComponent},
  {path: "category-list", component:CategoryListComponent},
  {path: "add-category", component:AddCategoryComponent},
  {path: "update-category/:id", component:UpdateCategoryComponent},
  {path: "stock-list", component:StockListComponent},
  {path: "add-stock", component: AddStockComponent},
  {path: "update-stock/:id", component: UpdateStockComponent},
  {path: "list-delivery", component: ListLivreryComponent},
  {path: "create-delivery", component: CreateDeliveryComponent},
  {path: "edit-delivery/:id", component: EditDeliveryComponent},
  {path: "ajout-livraison", component: AjoutLivraisonComponent},
  {path: "edit-livraison/:id", component: EditLivraisonComponent},
  {path: "list-livraison", component: ListLivraisonComponent},
  {path: "add-reclamation", component: AddReclamationComponent},
  {path: "edit-reclamation/:id", component: EditReclamationComponent},
  {path: "list-reclamation", component: ListReclamationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
