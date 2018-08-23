import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {By} from '@angular/platform-browser';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text details when text is complete', async() => {
    component.text = 'My test text';
    component.isTodoComplete = true;

    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#todo-text')).nativeElement.textContent).toEqual('My test text');
    expect(fixture.debugElement.query(By.css('#todo-is-checked')).nativeElement.checked).toBeTruthy();
  });

  it('should render text details when text is NOT complete', async() => {
    component.text = 'My test text 1';
    component.isTodoComplete = false;

    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#todo-text')).nativeElement.textContent).toEqual('My test text 1');
    expect(fixture.debugElement.query(By.css('#todo-is-checked')).nativeElement.checked).toBeFalsy();
  });
});
