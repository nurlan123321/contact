import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Listings } from '../interface/listings'
import * as firebase from 'firebase';


@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  path: any;
  folder: any;
  constructor(private af: AngularFireDatabase) { 
      this.listings = this.af.list('/listings');
      this.folder = 'listingimage';
  }

  getListings() {
    
     return this.listings;
  }

  addListing(listing){
      return this.listings.push(listing);
  }
  getListingDetail(id: any){
    this.listing = this.af.object('/listings/' + id ) as FirebaseObjectObservable<Listings>
    return this.listing;
  }
  updateListing(id, listing){
      return this.listings.update(id, listing);
   }
    deleteListing(id){
      return this.listings.remove(id);
  }
}
