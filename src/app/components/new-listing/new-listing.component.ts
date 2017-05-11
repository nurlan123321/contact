import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../service/listing.service';
import { Router } from '@angular/router';
import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {

  name: any;
  email: any;
  phone: any;
  city: any;
  body: any;
  image: any;

  constructor(
    private listingService: ListingService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  addListingSubmit(){
   let listing = {
      name: this.name,
      email: this.email,
      city: this.city,
      phone: this.phone,
      body: this.body
      
    }
    this.listingService.addListing(listing);
    this.router.navigate(['/listings']);
  }

}
