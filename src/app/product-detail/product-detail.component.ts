import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ProductDetail } from '../productdetail';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId;
  productDetail;

  constructor(public route : ActivatedRoute, public dataservice:DataService ) {

    this.productId = this.route.snapshot.paramMap.get('product_id');
    console.log("productid:",this.productId)
    this.dataservice.getroductsbyId(this.productId);
    this.dataservice.productDetail$.subscribe(data=>{
      this.productDetail=data;
    })
   }

  ngOnInit() {
  }

}
