import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productArr:Array<Iproduct>=[
    {
      pname:'samsung M31',
      pid:'123',
      pstatus:'In-progress',
      canReturn:1
    },
    {
      pname:'samsung TV',
      pid:'124',
      pstatus:'Dispatched',
      canReturn:1
    },
    {
      pname:'iphone 12',
      pid:'125',
      pstatus:'Delivered',
      canReturn:1
    },
  ]
  constructor(
    private _router:Router,
    private _snackbar:SnackbarService
  ) { }

  fetchAllproduct(){
    return  this.productArr
  }
   fetchproduct(id:string){
     return this.productArr.find(prod=>prod.pid===id)
   }
  addnewprod(prodobj:Iproduct){
       this.productArr.push(prodobj)
       this._router.navigate(['products'])
       this._snackbar.opensnackbar(`PRODUCT IS ADDED SUCCESSFULLYY ${prodobj.pname}`)
  }
  updateprod(updateObj:Iproduct){
      let getindex=this.productArr.findIndex(prod=>prod.pid===updateObj.pid)
      this.productArr[getindex]=updateObj
      this._router.navigate(['products'])
      this._snackbar.opensnackbar(`PRODUCT IS UPDATED SUCCESSFULLYY ${updateObj.pname}`)
  }
  removeprod(id:string){
    let getIndex=this.productArr.findIndex(prod=>prod.pid===id)
    this.productArr.splice(getIndex,1)
    this._router.navigate(['products'])
    this._snackbar.opensnackbar(`PRODUCT IS REMOVED SUCCESSFULLYY `)
  }
}
