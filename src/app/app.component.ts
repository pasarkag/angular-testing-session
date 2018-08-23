import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos = [
    {
      isComplete: false,
      text: 'File income-tax returns'
    },
    {
      isComplete: true,
      text: 'Get clothes from laundry'
    }
  ];

  addTodo(todoText: any) {
    this.todos.push({
      isComplete: false,
      text: todoText
    });
  }
}
