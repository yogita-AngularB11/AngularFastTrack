import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives1';
  isShow=false;
  day:number=5;
fruits=['apple','banana','cherry','date','papaya','mango','watermelon']

  handleClick(){
    this.isShow=true;  
  }
  handleButtonClick(){
    this.isShow=false;  
  }
  // isAdmin=true;
  isAdmin=true;
}
