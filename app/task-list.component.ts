import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList">{{currentTask.description}} <button (click)="ediButtonHasBeenClicked(currentTask)">Edit!</button></li>
  </ul>
  `
})

export class TaskListComponent {

  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("¡DONE!");
    } else {
      alert("Not done :(");
    }
  }

  priorityColor(currentTask) {
    if(currentTask.priority === 3) {
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  ediButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

}
