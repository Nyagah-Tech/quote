import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  transform(value: any): number {
    let today: Date=new Date();
    let shortdate:any= new Date(today.getFullYear(),today.getMonth(),today.getDay());
    let diff=Math.abs(shortdate-value);
    const sec=86400;//convert into seconds
    let finaldays=diff*0.001;//convert into milliseconds
    let days= finaldays/sec;
    return days;
  }

}
