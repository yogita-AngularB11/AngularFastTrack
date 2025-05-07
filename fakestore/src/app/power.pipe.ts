import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  standalone: false
})
export class PowerPipe implements PipeTransform {

  transform(value: number,powerValue:number, ...args: unknown[]): unknown {
    return Math.pow(value,powerValue);
  }

}
