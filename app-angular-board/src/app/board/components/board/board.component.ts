import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import CardList from '../../models/CardList';
import { Router, ActivatedRoute } from '@angular/router';
import Card from '../../models/Card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {


  @Input() public searchCriterion: string;
  public cardList: CardList[];

  constructor(private boardService: BoardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cardList = this.boardService.cardList;
  }

  public removeItem(args) {
    this.boardService.removeItem(args);
  }

  public expandItem(args) {
    this.boardService.expandItem(args);
  }

  public onEdit(item: Card) {
    this.router.navigate(['edit-page', item.id], { relativeTo: this.route });
  }

  public onCreateCard() {
    this.router.navigate(['board-page', 'create-page']);
  }
}
