import { Component, OnInit, Output } from '@angular/core';
import { BoardService } from '../../services/board.service';
import User from '../../models/User';
import CardList from '../../models/CardList';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  public assignees: User[];
  public cardList: CardList[];

  ngOnInit(): void {
    this.cardList = this.boardService.cardList;
    const arr = [];
    this.cardList.forEach(item => {
      item.cards.forEach(el => {
        arr.push(el.assignee);
      });
    });
    this.assignees = arr;
  }
}
