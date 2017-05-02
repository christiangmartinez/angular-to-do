import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h1>New Task</h1>
      </div>
      <div class="panel-body">
        <div>
          <label>Enter Task Description:</label>
          <input #newDescription>
        </div>
        <div>
          <label>Task Priority:</label>
          <select #newPriority>
            <option [value]="1">Low Priority</option>
            <option [value]="2">Medium Priority</option>
            <option [value]="3">High Priority</option>
          </select>
          <button (click)="submitForm(newDescription.value, newPriority.value); newDescription.value=''">Add</button>
        </div>
      </div>
    </div>
  `

})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();

  submitForm(description: string, priority: number) {
    var newTaskToAdd: Task = new Task(description, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }

}
