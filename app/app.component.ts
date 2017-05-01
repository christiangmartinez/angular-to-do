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
          <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
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
    new Task("Finsih homework"),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string){}
}
