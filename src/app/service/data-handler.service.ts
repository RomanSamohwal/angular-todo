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
      let filteredTasks = param.todolist.tasks.filter(t => t.id !== param.taskId)
      param.todolist.tasks = filteredTasks
      TestData.todoLists.splice(foundTodoIndex, 1, param.todolist)
    }

    return of(TestData.todoLists)
  }
}
