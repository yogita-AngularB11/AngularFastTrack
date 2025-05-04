import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'data-binding';
  username:string="Yogita"
  a:number=10;
  b:number=20;
  isDisable=false;
  isGood=false;
  imageUrl='https://wallpapers.com/images/hd/vitthal-rukmini-black-statue-xbz9sqbi31743wg9.jpg';
  handleClick(){
    this.isGood=this.isGood?false:true;
  }
}
