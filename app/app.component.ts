import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List</h1>
    <h3>{{currentFocus}}</h3>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
}
