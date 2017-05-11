import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NewListingComponent } from "./components/new-listing/new-listing.component";
import { ListingsComponent } from "./components/listings/listings.component";
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent } from "./components/edit/edit.component";


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'new-listing', component: NewListingComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit-listing/:id', component: EditComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);