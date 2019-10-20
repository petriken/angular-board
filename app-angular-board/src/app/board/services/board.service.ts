import { Injectable } from '@angular/core';
import Card from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public today: Date = new Date();
  public date: Date = new Date();
  public item: Card;

  cardList = [
    {
      id: 1,
      name: 'Backlog',
      cards: [
        {
          name: 'Task 1',
          description: 'buy milk',
          isClicked: true,
          dueDate: this.date.setDate(this.today.getDate() + 8),
          assignee: {
            id: 'vik',
            firstName: 'Viktor',
            lastName: 'Pupkin'
          }
        },
        {
          name: 'Task 2',
          description: 'buy bread',
          isClicked: false,
          dueDate: this.date.setDate(this.today.getDate() + 4), assignee: {
            id: 'zama',
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
            id: 'oba',
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
          dueDate: this.date.setDate(this.today.getDate() + 7),
          assignee: {
            id: 'tod',
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
            id: 'richa',
            firstName: 'Liza',
            lastName: 'Richie'
          }
        },
        {
          name: 'Task 6',
          description: 'buy meat',
          isClicked: false,
          dueDate: this.date.setDate(this.today.getDate() + 10),
          assignee: {
            id: 'pola',
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
            id: 'ham',
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
            id: 'vana',
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
            id: 'def',
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

  public getTaskByName(name: string) {
    for (const card of this.cardList) {
      for (const item of card.cards) {
        if (item.name === name) {
          console.log(item);
          return item;
        }
      }
    }
  }
}
