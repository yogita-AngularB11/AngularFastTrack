import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'randomQuote';
  myQuote:any; 
  constructor(public hc: HttpClient) {
    this.hc.get('http://api.quotable.io/random')
    .subscribe(
      (data) => this.myQuote=data
      // (err)=>console.log(err)
    );
  }
} 
