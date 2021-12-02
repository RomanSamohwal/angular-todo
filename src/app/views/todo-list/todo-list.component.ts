import { Component, OnInit } from '@angular/core';
import {TodoList} from "../../model/TodoList";
import {Task} from "../../model/Task";

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
      completed: true,
    },
      {
        id: 2,
        title: 'Java',
        completed: false,
      },
      {
        id: 3,
        title: 'Python',
        completed: true,
      },]
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  toggleTaskCompleted(task: Task) {
    let todoList = {
      ...this.todoList,
      tasks: this.todoList.tasks.map(t => {
        if (task.id == t.id) {
          return {
            ...t, completed: !task.completed
          }
        }
        return t
      })
    }

    this.todoList = todoList
  }
}
