import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  todoText: string;
  @Output() todoAddHandler = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todoAddHandler.emit(this.todoText);
    this.todoText = '';
  }
}
