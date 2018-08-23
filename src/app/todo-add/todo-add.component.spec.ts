import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoAddComponent} from './todo-add.component';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit event on add todo', async() => {
    await fixture.whenStable();
    spyOn(component.todoAddHandler, 'emit');

    const input: HTMLInputElement = fixture.debugElement.query(By.css('#todo-input')).nativeElement;
    input.value = 'New todo';
    input.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#todo-add')).nativeElement.click();

    fixture.detectChanges();

    expect(component.todoAddHandler.emit).toHaveBeenCalledWith('New todo');
  });

  it('should clear input after adding todo', async() => {
    await fixture.whenStable();
    expect(fixture.debugElement.query(By.css('#todo-input')).nativeElement.value).toEqual('');

    const input: HTMLInputElement = fixture.debugElement.query(By.css('#todo-input')).nativeElement;
    input.value = 'New todo';
    input.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#todo-add')).nativeElement.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.debugElement.query(By.css('#todo-input')).nativeElement.value).toEqual('');
  });
});
