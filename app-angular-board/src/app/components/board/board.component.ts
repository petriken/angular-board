import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  cardList = [
    {
      id: 1,
      name: "Backlog",
      cards: [
        {
          name: "Task 1",
          description: "buy milk",
          isClicked: true
        },
        {
          name: "Task 2",
          description: "buy bread",
          isClicked: false
        },
        {
          name: "Task 3",
          description: "buy meat",
          isClicked: false
        }
      ],
      isDoneSection: false
    },
    {
      id: 2,
      name: "In progress",
      cards: [
        {
          name: "Task 4",
          description: "buy milk",
          isClicked: false
        },
        {
          name: "Task 5",
          description: "buy bread",
          isClicked: false
        },
        {
          name: "Task 6",
          description: "buy meat",
          isClicked: false
        }
      ],
      isDoneSection: false
    },
    {
      id: 1,
      name: "Done",
      cards: [
        {
          name: "Task 7",
          description: "buy milk",
          isClicked: false
        },
        {
          name: "Task 8",
          description: "buy bread",
          isClicked: false
        },
        {
          name: "Task 9",
          description: "buy meat",
          isClicked: false
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
    console.log(this.cardList[cardIndex].cards[itemIndex].isClicked);

    this.cardList[cardIndex].cards[itemIndex].isClicked = !this.cardList[
      cardIndex
    ].cards[itemIndex].isClicked;
  }

  constructor() {}

  ngOnInit() {}
}
