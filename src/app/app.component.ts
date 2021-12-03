import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "./service/data-handler.service";
import {TodoList} from "./model/TodoList";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  todoLists: TodoList[] | null = null

  constructor(private dataHandlerService: DataHandlerService) {
   }

  ngOnInit(): void {
    this.dataHandlerService.getAllTodoLists().subscribe(value => {
      console.log(value)
      this.todoLists = value
    })
  }
}
