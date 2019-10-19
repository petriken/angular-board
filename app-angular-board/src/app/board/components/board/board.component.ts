import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import CardList from '../../models/CardList';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {


  @Input() public searchCriterion: string;
  public cardList: CardList[];
  // public cardList: CardList;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.cardList = this.boardService.cardList;
  }

  public removeItem(args) {
    this.boardService.removeItem(args);
  }

  public expandItem(args) {
    this.boardService.expandItem(args);
  }
}
