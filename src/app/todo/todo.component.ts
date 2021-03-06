import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() text: string;
  @Input() isTodoComplete: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateTodoStatus(event: HTMLSelectElement) {
    this.isTodoComplete = event.target.checked;
  }
}
