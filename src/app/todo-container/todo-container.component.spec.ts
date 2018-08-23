import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContainerComponent } from './todo-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('TodoContainerComponent', () => {
  let component: TodoContainerComponent;
  let fixture: ComponentFixture<TodoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoContainerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all todo details', async() => {
    component.todos = [{
      text: 'My Test todo',
      isComplete: true
    },
    {
      text: 'My Test todo 1',
      isComplete: true
    }];

    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h2')).nativeElement.textContent).toEqual('List of all Todos!');
    expect(fixture.debugElement.queryAll(By.css('app-todo')).length).toEqual(2);
  });
});
