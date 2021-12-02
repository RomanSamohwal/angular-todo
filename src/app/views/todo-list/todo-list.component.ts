import { Component, OnInit } from '@angular/core';
import {TodoList} from "../../model/TodoList";

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
    },
      {
        id: 2,
        title: 'Java',
        completed: false,
      },
      {
        id: 3,
        title: 'Python',
        completed: false,
      },]
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
