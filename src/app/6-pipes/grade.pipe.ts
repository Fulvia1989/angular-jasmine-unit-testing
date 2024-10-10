import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let grade = 'F';
    if(value >= 90){
      grade = 'A'
    }
    if(value <90 && value >= 80) {
      grade = 'B'
    }
    if(value < 80 && value >= 70){
      grade = 'C'
    }
    if(value < 70 && value >= 60){
      grade = 'D'
    }
    if(value < 60 && value >= 35){
      grade = 'E';
    }
    return grade;
  }

}
