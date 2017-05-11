import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../service/listing.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  name;
  email;
  phone;
  city;
  body;
  listing: any;
  constructor(
    private listingService: ListingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
     //GET ID
    this.id = this.route.snapshot.params['id'];
    this.listingService.getListingDetail(this.id)
      .subscribe(listing => {
        this.name = listing.name;
        this.email = listing.email;
        this.phone = listing.phone;
        this.city = listing.city;
        this.body = listing.body;    
      })
  }
  onEditSubmit(){
    let listing = {
      name: this.name,
      email: this.email,
      city: this.city,
      phone: this.phone,
      body: this.body
    }
    this.listingService.updateListing(this.id, listing);
    this.router.navigate(['detail', this.id]);
   
   }
}
