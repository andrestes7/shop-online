import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { Product } from '../protuct.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 @Input() public product: Product;
 @Output() onclick: EventEmitter<any>= new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  public onClickProduct(){
    this.onclick.emit();
    
  }
}
