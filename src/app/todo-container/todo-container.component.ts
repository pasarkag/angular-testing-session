import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
