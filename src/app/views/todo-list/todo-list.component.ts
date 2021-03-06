import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoList} from "../../model/TodoList";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck {

  @Input() todoList: TodoList | null = null;
  //функция декоратора, помечающая свойство как способ передачи данных от дочернего к родительскому
  @Output() addTaskEmit = new EventEmitter<{ todolist: TodoList, taskTitle: string }>();

  @Output() deleteTaskEmit = new EventEmitter<{ todolist: TodoList, taskId: number }>();

  @Output() updateTaskEmit = new EventEmitter<{ todolist: TodoList, task: Task }>();

  @Output() deleteTodolistEmit = new EventEmitter<number>()

  @Output() updateTodolist = new EventEmitter<TodoList>()

  isEdit: boolean = false
  isEmptyTitle: boolean = false

  status: 'all' | 'active' | 'completed' = "all"

  label: string = 'task title'

  title: string = ''
  isEmpty: boolean = false

  filteredTaskByStatus: TodoList | null = null

  ngOnInit(): void {
    this.status = 'all'
    this.filteredTaskByStatus = this.todoList
  }

  ngDoCheck(): void {
    if (this.title !== '') {
      this.isEmptyTitle = false
    }
  }

  toggleIsEditTitle(): void {
    this.isEdit = !this.isEdit
  }

  editTodolistTitle(title: string): void {
    if (this.todoList) this.updateTodolist.emit({...this.todoList, title: title})
    this.toggleIsEditTitle()
  }

  deleteTodolist(): void {
    this.deleteTodolistEmit.emit(this.todoList?.id)
  }

  //метод для добавления Task
  addTask(title: string): void {

    if (title === '') {
      this.isEmptyTitle = true
      return
    }

    if (this.todoList) this.addTaskEmit.emit({todolist: this.todoList, taskTitle: title})

    this.selectFilter()
    this.title = ''
    this.label = 'task title'
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
    if (this.todoList) {
      this.filteredTaskByStatus = {
        ...this.todoList,
        tasks: this.todoList?.tasks.filter(t => !t.completed)
      }
    }
  }

  filterCompleted(): void {
    this.status = 'completed'

    if (this.todoList) {
      this.filteredTaskByStatus = {
        ...this.todoList,
        tasks: this.todoList?.tasks.filter(t => t.completed)
      }
    }
  }
}
