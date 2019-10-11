import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() public searchCriterion: string;
  cardList = [
    {
      id: 1,
      name: 'Backlog',
      cards: [
        {
          name: 'Task 1',
          description: 'buy milk',
          isClicked: true,
          dueDate: new Date('October 3, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'Viktor',
            lastName: 'Pupkin'
          }
        },
        {
          name: 'Task 2',
          description: 'buy bread',
          isClicked: false,
          dueDate: new Date('October 7, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'Ivan',
            lastName: 'Zamyatin'
          }
        },
        {
          name: 'Task 3',
          description: 'buy meat',
          isClicked: false,
          dueDate: new Date('October 6, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'Clare',
            lastName: 'Obignale'
          }
        }
      ],
      isDoneSection: false
    },
    {
      id: 2,
      name: 'In progress',
      cards: [
        {
          name: 'Task 4',
          description: 'buy milk',
          isClicked: false,
          dueDate: new Date('October 8, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'John',
            lastName: 'Todessky'
          }
        },
        {
          name: 'Task 5',
          description: 'buy bread',
          isClicked: false,
          dueDate: new Date('October 15, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'Liza',
            lastName: 'Richie'
          }
        },
        {
          name: 'Task 6',
          description: 'buy meat',
          isClicked: false,
          dueDate: new Date('October 4, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'Franc',
            lastName: 'Polanski'
          }
        }
      ],
      isDoneSection: false
    },
    {
      id: 1,
      name: 'Done',
      cards: [
        {
          name: 'Task 7',
          description: 'buy milk',
          isClicked: false,
          dueDate: new Date('December 28, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'Kirk',
            lastName: 'Hammet'
          }
        },
        {
          name: 'Task 8',
          description: 'buy bread',
          isClicked: false,
          dueDate: new Date('October 3, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'Bruce',
            lastName: 'Waine'
          }
        },
        {
          name: 'Task 9',
          description: 'buy meat',
          isClicked: false,
          dueDate: new Date('October 6, 2019 03:24:00').getTime(),
          assignee: {
            firstName: 'John',
            lastName: 'Doe'
          }
        }
      ],
      isDoneSection: true
    }
  ];

  public removeItem({ list, item }) {
    const itemIndex = list.findIndex(
      currentItem => currentItem.name === item.name
    );
    const cardIndex = this.cardList.findIndex(
      currentList => currentList.cards === list
    );
    this.cardList[cardIndex].cards.splice(itemIndex, 1);
  }

  public expandItem({ list, item }) {
    const itemIndex = list.findIndex(
      currentItem => currentItem.name === item.name
    );
    const cardIndex = this.cardList.findIndex(
      currentList => currentList.cards === list
    );
    this.cardList[cardIndex].cards[itemIndex].isClicked = !this.cardList[
      cardIndex
    ].cards[itemIndex].isClicked;
  }
}
