import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodoContainerComponent} from './todo-container/todo-container.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoComponent,
        TodoContainerComponent,
        TodoAddComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should add a todo', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.debugElement.queryAll(By.css('app-todo')).length).toEqual(2);

    const input: HTMLInputElement = fixture.debugElement.query(By.css('#todo-input')).nativeElement;
    input.value = 'Test todo';
    input.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#todo-add')).nativeElement.click();

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('app-todo')).length).toEqual(3);
  });
});
