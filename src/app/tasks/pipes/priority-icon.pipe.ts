import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityIcon'
})
export class PriorityIconPipe implements PipeTransform {

  public listNameIcon = {
    normal: "task",
    urgente: "priority_high",
    terminado: "check_small"
  }
  public listNameKeys = Object.keys(this.listNameIcon);

  transform(namePriority: string): string {

    if(this.listNameKeys.includes(namePriority)){
      let keyProperty = namePriority as keyof typeof this.listNameIcon;
      return this.listNameIcon[keyProperty];
    }

    return "question_mark";
  }



}
