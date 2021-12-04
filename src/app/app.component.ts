import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "./service/data-handler.service";
import {TodoList} from "./model/TodoList";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todoLists: TodoList[] | null = null

  constructor(private dataHandlerService: DataHandlerService) {
  }

  onAddTask(param: { todolist: TodoList, taskTitle: string }) {
    this.dataHandlerService.addTask({todolist: param.todolist, taskTitle: param.taskTitle})
      .subscribe(value => {
        this.todoLists = value
      })
  }

  ngOnInit(): void {
    this.dataHandlerService.getAllTodoLists().subscribe(value => {
      //вывел в консоль полученные данные
      console.log(value)
      this.todoLists = value
    })
  }
}
