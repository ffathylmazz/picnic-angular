import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { ProductDetail } from './productdetail';
import { flatMap,toArray, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public productList$ : Subject<Products[]> = new Subject<Products[]>();
  public productDetail$:Subject<ProductDetail[]>= new Subject<ProductDetail[]>();


  constructor(public httpClient : HttpClient,) { }

  public getProducts(){
    return this.httpClient.get(`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list`)
    .subscribe(
      data=>{
        let abc:any=data;
        this.productList$.next(abc.products);
      }
    )
  }

  public getroductsbyId(product_id){
    return this.httpClient.get(`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${product_id}/detail`)
    .subscribe(
      data=>{
        let abc:any=data;
        this.productDetail$.next(abc)
      }
    )
  }

  // public search(keyword){
    
  //   return this.httpClient.get(`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list`)
  //   .pipe(
  //     flatMap(response => response.json() as Products[]),
  //     map(result => result.name === keyword),
  //     toArray()
  //   )
  // }
  
}
