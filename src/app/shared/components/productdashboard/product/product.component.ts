import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   productId!:string;
   productObj!:Iproduct
  constructor(
    private _routes:ActivatedRoute,
    private _prodservice:ProductService
  ) { }

  ngOnInit(): void {

     this.productId=this._routes.snapshot.params['productId']
     if(this.productId){
      this.productObj= this._prodservice.fetchproduct(this.productId)!
     }

  }

  onprodRemove(id:string){
    let confirmed= confirm('ARE YOU SURE YOU WANT TO REMOVE THIS PRODUCT');
    if(confirmed){
      this._prodservice.removeprod(id)
    }
    
  }

}
