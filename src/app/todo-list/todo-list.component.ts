import { Component, OnInit } from '@angular/core';
import {TodoList} from "../model/TodoList";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  //добавили todoList
  todoList: TodoList = {
    id: 1,
    title: 'Языки программирования',
    tasks: []
  }

  constructor() {

  }

  ngOnInit(): void {

  }
}
