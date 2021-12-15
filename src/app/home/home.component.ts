import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Products } from '../products';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:Products[];
  filteredPoductList:Products[];
  
  private _searchTerm:string;

  get searchTerm():string{
    return this._searchTerm;
  }
  set searchTerm(value:string){
     this._searchTerm=value;
     this.filteredPoductList = this.filteredProductList(value);
  }

  filteredProductList(searchQuery:string){
     return this.productList.filter(products=>
      products.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !==-1)
  }
 

  constructor(public dataService:DataService,public route:Router,public modalService:NgbModal) {
    this.dataService.getProducts();
    this.dataService.productList$.subscribe(res=>this.filteredPoductList=this.productList=res)
  
   }

  // For search input, I wanted to use rxjs filter operation but I could not implement..I have got something new to learn :D 
  // search(){
  //  this.dataService.search(this.searchTerm)
  // }
  
  ngOnInit() {
   
  }

  cardClick(item: Products,content) {
    //this.openModal(item.product_id,content)
    this.route.navigate(["/productdetail",item.product_id])
  }

//popup does not work..
  openModal(item,content) {
    this.dataService.getroductsbyId(item.product_id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }




}
