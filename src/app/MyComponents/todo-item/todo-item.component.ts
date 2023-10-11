import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  @Input()
  todo!: Todo;
  @Input()
  i!: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  OnDelete(todo: Todo) {
    this.todoDelete.emit(todo);
    // alert('Item deleted !!!');
  }
  OnCheckboxClick(todo: Todo) {
    console.log(todo);
    this.todoCheckbox.emit(todo);
  }
}
