import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountProductService {
  c = 0;
  pro1:any;

  constructor() {}

  incr() {
    this.c++;
  }

  getC() {
    return this.c;
  }

  getProd(obj:any)
  {
    this.pro1=obj;
  }
  
  printProduct()
  {
    alert(this.pro1.name+ " is Added Successfully")
  }
}
