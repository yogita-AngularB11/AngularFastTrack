import { Component } from '@angular/core';
import { CountProductService } from '../count-product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
// Dependency Injection is a fundamental concept in angular that allows you to provide dependencies to classes (like components,services and directives)without them having to create those dependencies themselves 
 //you achieve it by creating an instance of service in component constructor parameters
 pro={
  img:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/23079364/2023/8/31/3fb79283-873c-4fa5-8747-f98d7ea48e091693466409208-The-Roadster-Lifestyle-Co-Women-White--Pink-Colourblocked-Li-1.jpg',
  name:'Shoes',
  price:200,
 }

 constructor(private cs:CountProductService){}
  increase(){
    this.cs.incr();
    this.cs.getProd(this.pro)
 }
}
