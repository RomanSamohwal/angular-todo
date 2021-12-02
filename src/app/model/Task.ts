import {Priority} from "./Priority";

export class Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: Priority;
  date?: Date;


  constructor(id: number, title: string, completed: boolean, priority?: Priority, date?: Date) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
    this.date = date;
  }
}
