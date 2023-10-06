import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorCardTask'
})
export class ColorCardTaskPipe implements PipeTransform {

  transform(value: string): unknown {
    return null;
  }

}
