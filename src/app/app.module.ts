import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListingService } from './service/listing.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { TruncatePipe } from './pipe/truncate.pipe';
import {Ng2PaginationModule} from 'ng2-pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';


import { AppComponent } from './app.component';
import { ListingsComponent } from './components/listings/listings.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCRfHT16X3_faxSPLl_r-g_YjEpg7EWBUQ",
  authDomain: "contact-eb9f1.firebaseapp.com",
  databaseURL: "https://contact-eb9f1.firebaseio.com",
 projectId: "contact-eb9f1",
  storageBucket: "contact-eb9f1.appspot.com",
  messagingSenderId: "462582895329"
};



@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NewListingComponent,
    DetailComponent,
    TruncatePipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    Ng2PaginationModule,
    routing
    
  ],
  providers: [ ListingService, AngularFireDatabase, AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
