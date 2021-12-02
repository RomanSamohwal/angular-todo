import { Component, OnInit } from '@angular/core';
import {TodoList} from "../model/TodoList";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  //добавили todoList с тасками
  todoList: TodoList = {
    id: 1,
    title: 'Языки программирования',
    tasks: [{
      id: 1,
      title: 'JavaScript',
      completed: false,
      date: new Date('2022-04-11'),
    },
      {
        id: 2,
        title: 'Java',
        completed: false,
        date: new Date('2022-05-11'),
      },
      {
        id: 3,
        title: 'Python',
        completed: false,
        date: new Date('2022-04-11'),
      },]
  }

  constructor() {

  }

  ngOnInit(): void {

  }
}
