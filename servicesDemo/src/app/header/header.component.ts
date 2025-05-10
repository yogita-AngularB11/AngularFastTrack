import { Component } from '@angular/core';
import { CountProductService } from '../count-product.service';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  c = 0;
  constructor(private cs: CountProductService) {}
  getData() {
    this.c = this.cs.getC();
    this.cs.printProduct();
  }
}
