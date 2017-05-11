import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../service/listing.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  listing:any;
  constructor(
    private listingService: ListingService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
     //GET ID
    this.id = this.route.snapshot.params['id'];
    this.listingService.getListingDetail(this.id)
      .subscribe(listing => {
        this.listing = listing;
    });
  }
  onDelete(){
    this.listingService.deleteListing(this.id);
    this.router.navigate(['listings']);
    
  }

}
