import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.scss']
})
export class ProductdashboardComponent implements OnInit {
  prodArr!:Array<Iproduct>
  constructor(
    private _productService:ProductService
  ) { }

  ngOnInit(): void {
    this.prodArr= this._productService.fetchAllproduct()
  }

}
