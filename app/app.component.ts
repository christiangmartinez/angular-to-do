import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
     <div class="container">
      <div class="page-header">
        <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
      </div>
      <div class="row">
        <div class="col-md-6 well">
          <h3>{{currentFocus}}</h3>
          <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
          <hr>
          <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
        </div>
        <div class="col-md-6">
          <new-task (newTaskSender)="addTask($event)"></new-task>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task("Finish homework", 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];


  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
      this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }

}
