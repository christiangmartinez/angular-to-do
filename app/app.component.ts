import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="page-header">
        <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
      </div>
      <h3>{{currentFocus}}</h3>
        <ul>
          <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button class="btn btn-primary"(click)="editTask()">edit!!!</button></li>
        </ul>
    </div>
    `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finsih homework", 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  editTask() {
    alert("REQUEST REJECTED");
  }

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
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number){}
}
