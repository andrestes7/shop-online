import { Component, OnInit } from '@angular/core';
import { Product } from './protuct.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products: Array<Product>=[];
public productsToShow: Array<Product>=[];
public increment: number=0;
  constructor() { }

  ngOnInit() {
    this.productsToShow=this.products;
    const p1= new Product();
    p1.name='Chocolate';
    p1.price= 3;
    p1.type='food';

    const p2= new Product();
    p2.name='Laptop';
    p2.price= 300;
    p2.type='electronics';
    
    const p3= new Product();
    p3.name='Camiseta';
    p3.price= 30;
    p3.type='clothes';

    const p4= new Product();
    p4.name='pantalon';
    p4.price= 30;
    p4.type='clothes';
    
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);
    this.products.push(p4);
  }
  public getFoodProducts(): void {
    this.productsToShow = this.products;
    this.productsToShow = this.productsToShow.filter(Product => Product.type === 'food')
  }
  public getClothesProducts(): void {
    this.productsToShow = this.products;
    this.productsToShow = this.productsToShow.filter(Product => Product.type === 'clothes')
  }
  public getElectronicsProducts(): void {
    this.productsToShow = this.products;
    this.productsToShow = this.productsToShow.filter(Product => Product.type === 'electronics')
  }
  public getAllProducts(): void {
    this.productsToShow = this.products;
  }
  
  public incrementVariable(){
    this.increment++;
  }

}
