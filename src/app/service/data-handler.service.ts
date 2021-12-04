import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {TodoList} from "../model/TodoList";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getAllTodoLists(): Observable<TodoList[]> {
    return of(TestData.todoLists)
  }

  addTodolist(title: string): Observable<TodoList[]> {

    let createdTodolist: TodoList = {
      id: Math.floor(Math.random() * 1000000),
      title: title,
      tasks: []
    }

    TestData.todoLists.push(createdTodolist)

    return of(TestData.todoLists)
  }

  deleteTodolist(todolistId: number) {
    TestData.todoLists = TestData.todoLists.filter(t => t.id !== todolistId)
    return of(TestData.todoLists)
  }

  addTask(param: { todolist: TodoList, taskTitle: string }): Observable<TodoList[]> {

    let foundTodoIndex = TestData.todoLists.findIndex(t => t.id === param.todolist.id)

    if (foundTodoIndex !== -1) {
      let createdTask = <Task>{
        id: Math.floor(Math.random() * 1000000),
        title: param.taskTitle,
        completed: false
      }

      param.todolist.tasks.push(createdTask)
      TestData.todoLists.splice(foundTodoIndex, 1, param.todolist)
    }
    return of(TestData.todoLists)
  }

  deleteTask(param: { todolist: TodoList, taskId: number }): Observable<TodoList[]> {

    let foundTodoIndex = TestData.todoLists.findIndex(t => t.id === param.todolist.id)

    if (foundTodoIndex !== -1) {
      param.todolist.tasks = param.todolist.tasks.filter(t => t.id !== param.taskId)
      TestData.todoLists.splice(foundTodoIndex, 1, param.todolist)
    }

    return of(TestData.todoLists)
  }

  updateSelectedTask(param: { todolist: TodoList, task: Task }): Observable<TodoList[]> {

    let foundTodoIndex = TestData.todoLists.findIndex(t => t.id === param.todolist.id)

    if (foundTodoIndex !== -1) {
      let foundTaskIndex = param.todolist.tasks.findIndex(t => t.id === param.task.id)
      param.todolist.tasks.splice(foundTaskIndex, 1, param.task)
      TestData.todoLists.splice(foundTodoIndex, 1, param.todolist)
    }
    return of(TestData.todoLists)
  }
}
