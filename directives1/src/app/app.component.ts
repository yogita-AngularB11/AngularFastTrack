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
  handleClick(){
    this.isShow=true;  
  }
  handleButtonClick(){
    this.isShow=false;  
  }
  // isAdmin=true;
  isAdmin=true;
}
