import { Injectable } from '@angular/core';
import Card from '../models/Card';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public today: Date = new Date();
  public date: Date = new Date();
  public item: Card;

  constructor(private router: Router) { }

  cardList = [
    {
      id: 1,
      name: 'Backlog',
      cards: [
        {
          name: 'Task 1',
          description: 'buy milk',
          isClicked: true,
          dueDate: this.dateStringToDate(8),
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
          dueDate: this.dateStringToDate(4),
          assignee: {
            id: 'zama',
            firstName: 'Ivan',
            lastName: 'Zamyatin'
          }
        },
        {
          name: 'Task 3',
          description: 'buy meat',
          isClicked: false,
          dueDate: new Date('October 6, 2019 03:24:00'),
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
          dueDate: this.dateStringToDate(7),
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
          dueDate: new Date('October 15, 2019 03:24:00'),
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
          dueDate: this.dateStringToDate(10),
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
          dueDate: new Date('December 28, 2019 03:24:00'),
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
          dueDate: new Date('October 3, 2019 03:24:00'),
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
          dueDate: new Date('October 6, 2019 03:24:00'),
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

  private dateStringToDate(day) {
    const newDate = new Date();
    newDate.setDate(this.today.getDate() + day);
    return newDate;
  }

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

  public onCancel() {
    this.router.navigate(['/board-page']);
  }

  public onSaveTask(newCard) {
    if (newCard.name) {
      this.cardList[0].cards.push({
        name: newCard.name,
        description: newCard.description,
        isClicked: false,
        dueDate: newCard.dueDate,
        assignee: {
          id: newCard.assignee.id,
          firstName: newCard.assignee.firstName,
          lastName: newCard.assignee.lastName
        }
      });
      this.router.navigate(['/board-page']);
    }
  }

  public onEditTask() {
    this.router.navigate(['/board-page']);
  }

  getAssignee() {
    const arr = [];
    this.cardList.forEach(item => {
      item.cards.forEach(el => {
        if (!arr.includes(el.assignee.lastName)) {
          arr.push(el.assignee);
        }
      });
    });
    return arr;
  }
}
