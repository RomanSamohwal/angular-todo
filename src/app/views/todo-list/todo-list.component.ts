import {Component, OnInit} from '@angular/core';
import {TodoList} from "../../model/TodoList";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string = ''

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

  addTask(title: string): void {
    let createdTask = <Task>{
      id: this.todoList.tasks.length + 1,
      title: title,
      completed: false
    }
    this.todoList.tasks.push(createdTask)
    this.title = ''
  }

  toggleTaskCompleted(task: Task): void {
    let copyTodoList = {
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

    this.todoList = copyTodoList
  }
}
