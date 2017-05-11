import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../service/listing.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Listings } from '../../interface/listings';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
  
})
export class ListingsComponent implements OnInit {
listings: Listings[];


imageUrl: any;
  constructor( private listingService: ListingService ) { }

  ngOnInit() {
    
    this.listingService.getListings().subscribe(listings => {
      this.listings = listings;
      
    })
  }


}
