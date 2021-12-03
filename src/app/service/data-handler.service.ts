import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {TodoList} from "../model/TodoList";
import {TestData} from "../data/TestData";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getAllTodoLists(): Observable<TodoList[]> {
    return of(TestData.todoLists)
  }
}
