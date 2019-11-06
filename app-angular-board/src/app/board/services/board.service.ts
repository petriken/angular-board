import { Injectable } from '@angular/core';
import Card from '../models/Card';
import { Router } from '@angular/router';
import CardList from '../models/CardList';

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
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
      id: 3,
      name: 'Done',
      cards: [
        {
          id: 7,
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
          id: 8,
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
          id: 9,
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

  assigneesArray = [
    { id: 'vik', firstName: 'Viktor', lastName: 'Pupkin' },
    { id: 'zama', firstName: 'Ivan', lastName: 'Zamyatin' },
    { id: 'oba', firstName: 'Clare', lastName: 'Obignale' },
    { id: 'tod', firstName: 'John', lastName: 'Todessky' },
    { id: 'richa', firstName: 'Liza', lastName: 'Richie' },
    { id: 'pola', firstName: 'Franc', lastName: 'Polanski' },
    { id: 'ham', firstName: 'Kirk', lastName: 'Hammet' },
    { id: 'vana', firstName: 'Bruce', lastName: 'Waine' },
    { id: 'def', firstName: 'John', lastName: 'Doe' }
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

  public getTaskByName(id: number) {
    for (const card of this.cardList) {
      for (const item of card.cards) {
        if (item.id === id) {
          return item;
        }
      }
    }
  }

  public onCancel() {
    this.router.navigate(['/board-page']);
  }

  public checkTaskName(name: string) {
    for (const card of this.cardList) {
      for (const item of card.cards) {
        if (item.name === name) {
          return false;
        }
      }
    }
    return true;
  }

  private amountTask() {
    let count = 0;
    this.cardList.forEach(
      (item) => {
        item.cards.forEach(() => { count += 1; }
        );
      }
    );
    return count;
  }

  public onSaveTask(newCard) {


    if (this.checkTaskName(newCard.name) && newCard.name) {
      this.cardList[0].cards.push({
        id: this.amountTask() + 1,
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
    return this.assigneesArray;
  }
}
