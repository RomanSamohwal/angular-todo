import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoList} from "../../model/TodoList";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: TodoList | null = null;
  //функция декоратора, помечающая свойство как способ передачи данных от дочернего к родительскому
  @Output() addTaskEmit = new EventEmitter<{ todolist: TodoList, taskTitle: string }>();

  @Output() deleteTaskEmit = new EventEmitter<{ todolist: TodoList, taskId: number }>();

  @Output() updateTaskEmit = new EventEmitter<{ todolist: TodoList, task: Task }>();

  status: 'all' | 'active' | 'completed' = "all"

  errorMessage: string = ''

  title: string = ''

  filteredTaskByStatus: TodoList | null = null

  constructor() {

  }

  ngOnInit(): void {
    this.status = 'all'
    this.filteredTaskByStatus = this.todoList
  }

  //метод для добавления Task
  addTask(title: string): void {

    if (title === '') {
      this.errorMessage = 'не выбрано поле название задачи'
      return
    }

    if (this.todoList) this.addTaskEmit.emit({todolist: this.todoList, taskTitle: title})

    this.selectFilter()
    this.title = ''
    this.errorMessage = ''
  }

  deleteTask(task: Task): void {
    if (this.todoList) this.deleteTaskEmit.emit({todolist: this.todoList, taskId: task.id})
    this.selectFilter()
  }

  toggleTaskCompleted(task: Task): void {

    let updatedTask: Task = {
      ...task,
      completed: !task.completed
    }

    if (this.todoList) this.updateTaskEmit.emit({todolist: this.todoList, task: updatedTask})
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
      tasks: this.todoList?.tasks.filter(t => !t.completed)
    }
    // @ts-ignore
    this.filteredTaskByStatus = copyTodoList
  }

  filterCompleted(): void {
    this.status = 'completed'
    let copyTodoList = {
      ...this.todoList,
      tasks: this.todoList?.tasks.filter(t => t.completed)
    }
    // @ts-ignore
    this.filteredTaskByStatus = copyTodoList
  }
}
