import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TodoListComponent} from "./views/todo-list/todo-list.component";
import {FormsModule} from "@angular/forms";
import { AutoFocusDirective } from './directive/auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AutoFocusDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
