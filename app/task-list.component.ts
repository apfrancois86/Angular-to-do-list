import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
  </ul>
  `
})

export class TaskListComponent {
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];
  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert('this task is done!');
    } else {
      alert('This task is NOT done. DO IT NOW!')
    }
  }
  priorityColor(currentTask) {
    if (currentTask.priority ==3) {
      return "bg-danger";
    } else if (currentTask.priority ===2)  {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
