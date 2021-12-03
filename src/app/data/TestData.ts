import {TodoList} from "../model/TodoList";

export class TestData {

  static todoLists: TodoList[] = [
    {
      id: 1,
      title: 'Языки программирования',
      tasks: [{
        id: 1,
        title: 'JavaScript',
        completed: false
      },
        {
          id: 2,
          title: 'Java',
          completed: false
        },
        {
          id: 3,
          title: 'Python',
          completed: false
        },
      ]
    },
    {
      id: 2,
      title: 'Фреймворки',
      tasks: [{
        id: 1,
        title: 'React',
        completed: false
      },
        {
          id: 2,
          title: 'Angular',
          completed: false
        },
        {
          id: 3,
          title: 'Django',
          completed: false
        },
      ]
    }
  ]
}
