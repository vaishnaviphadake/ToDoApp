import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Todo } from 'src/app/Todo';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  title = 'HospitalManagement';

  onClickExplain() {
    alert('Explain');
  }

  onClickTranslate() {
    alert('Translate');
  }

  todos: Todo[] = [];
  localItem: string;
  constructor() {
    // setTimeout(() => {
    //   this.title = 'Changed title after 3 secs';
    // }, 1000);
    // this.localItem = localStorage.getItem('todos')
    this.localItem = localStorage.getItem('todos') || '';

    if (this.localItem == '') {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }

    // this.todos = [];
  }

  AddTodo(todo: Todo) {
    // console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ToggleTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  DeleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // userInput: string = '';
}

// {
//   sno: 1,
//   title: 'Break',
//   desc: 'High Priority',
//   active: true,
// },
// {
//   sno: 2,
//   title: 'pause',
//   active: false,
//   desc: 'highest priority',
// },
// {
//   sno: 3,
//   title: 'Stop',
//   active: true,
//   desc: 'High Priority',
// },
