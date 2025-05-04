import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'twoway';
  name = '';
  twoWayInp: string = '';

  handleInputChange(e: any) {
    console.log(e.target.value);
    this.name = e.target.value;
  }
}
