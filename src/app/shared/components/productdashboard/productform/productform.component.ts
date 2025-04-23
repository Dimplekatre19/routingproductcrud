import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  prodForm!:FormGroup;
  isineditmode:boolean=false;
  prodObj!:Iproduct;
  prodId!:string;
  constructor(
    private _uuidservice:UuidService,
    private _prodService:ProductService,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.craeteform()


     this.prodId=this._routes.snapshot.params['productId'];
     if(this.prodId){
      this.isineditmode=true
      this.prodObj=this._prodService.fetchproduct(this.prodId)!
      this.prodForm.patchValue({...this.prodObj,canReturn:this.prodObj.canReturn?'Yes' :'No'})
     }

  }
 craeteform(){
    this.prodForm= new FormGroup({
        pname:new FormControl(null,Validators.required),
        pstatus:new FormControl(null,Validators.required),
        canReturn : new FormControl(null,Validators.required)
    })
 }

 onprodadd(){
     if(this.prodForm.valid){
       let canReturnval = this.prodForm.controls['canReturn'].value=== 'Yes' ? 1: 0;
       let newprod= {...this.prodForm.value,canReturn:canReturnval,pid:this._uuidservice.generateUuid()}
       this._prodService.addnewprod(newprod)
     }
 }
 onProdUpdate(){
    if(this.prodForm.valid){
       let updateObj:Iproduct={
         ...this.prodForm.value,
         canReturn:this.prodForm.controls['canReturn'].value=== 'Yes' ? 1: 0,
         pid:this.prodId
       }
       this.prodForm.reset();
        this._prodService.updateprod(updateObj)
    }
 }
}
