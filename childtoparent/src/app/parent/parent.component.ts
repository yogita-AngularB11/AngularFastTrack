import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
@ViewChild(ChildComponent) child !:ChildComponent
  c=0;
  k=0;
increment(){
  this.c++;
}
ngAfterViewInit(){
  this.k=this.child.c1;
}
}
