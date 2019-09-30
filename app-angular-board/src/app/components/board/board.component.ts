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
          name: "Task 1",
          description: "buy milk",
          isClicked: false
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
      id: 1,
      name: "Done",
      cards: [
        {
          name: "Task 1",
          description: "buy milk",
          isClicked: false
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
      isDoneSection: true
    }
  ];
  constructor() {}

  ngOnInit() {}
}
