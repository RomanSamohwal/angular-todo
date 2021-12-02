import {Priority} from "../model/Priority";
import {TodoList} from "../model/TodoList";

export class TestData {

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень срочно!!', color: '#F1128D'}
  ];

  static todoLists: TodoList[] = [
    {
      id: 1,
      title: 'Языки программирования',
      tasks: [{
        id: 1,
        title: 'JavaScript',
        completed: false,
        date: new Date('2022-04-11'),
        priority: TestData.priorities[0],
      },
        {
          id: 2,
          title: 'Java',
          completed: false,
          date: new Date('2022-05-11'),
          priority: TestData.priorities[1],
        },
        {
          id: 3,
          title: 'Python',
          completed: false,
          date: new Date('2022-04-11'),
          priority: TestData.priorities[4],
        },
      ]
    },
    {
      id: 2,
      title: 'Фреймворки',
      tasks: [{
        id: 1,
        title: 'React',
        completed: false,
        date: new Date('2022-02-11'),
        priority: TestData.priorities[0],
      },
        {
          id: 2,
          title: 'Angular',
          completed: false,
          date: new Date('2022-05-11'),
          priority: TestData.priorities[1],
        },
        {
          id: 3,
          title: 'Django',
          completed: false,
          date: new Date('2022-04-11'),
          priority: TestData.priorities[2],
        },
      ]
    }
  ]
}
