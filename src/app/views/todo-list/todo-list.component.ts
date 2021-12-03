import {Component, OnInit} from '@angular/core';
import {TodoList} from "../../model/TodoList";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  status: 'all' | 'active' | 'completed' = "all"

  errorMessage: string = ''

  title: string = ''

  filteredTaskByStatus: TodoList | null = null
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
    this.status = 'all'
    this.filteredTaskByStatus = this.todoList
  }

  addTask(title: string): void {

    if (title === '') {
      this.errorMessage = 'не выбрано поле название задачи'
      return
    }

    let createdTask = <Task>{
      id: Math.floor(Math.random() * 1000000),
      title: title,
      completed: false
    }
    this.todoList.tasks.push(createdTask)
    this.selectFilter()
    this.title = ''
    this.errorMessage = ''
  }

  deleteTask(task: Task): void {
    let copyTodoList = {
      ...this.todoList,
      tasks: this.todoList.tasks.filter(t => t.id !== task.id)
    }
    this.todoList = copyTodoList
    this.selectFilter()
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

    this.selectFilter()
  }

  selectFilter(): void {
    switch (this.status) {
      case "active":
        this.filterActive()
        break
      case "completed" :
        this.filterCompleted()
        break
      default:
        this.filterAll()
    }
  }

  filterAll(): void {
    this.status = 'all'
    this.filteredTaskByStatus = this.todoList
  }

  filterActive(): void {
    this.status = 'active'
    let copyTodoList = {
      ...this.todoList,
      tasks: this.todoList.tasks.filter(t => !t.completed)
    }
    this.filteredTaskByStatus = copyTodoList
  }

  filterCompleted(): void {
    this.status = 'completed'
    let copyTodoList = {
      ...this.todoList,
      tasks: this.todoList.tasks.filter(t => t.completed)
    }
    this.filteredTaskByStatus = copyTodoList
  }
}
