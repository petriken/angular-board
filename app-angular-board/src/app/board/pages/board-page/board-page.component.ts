import { Component, OnInit, Input } from '@angular/core';
import CardList from '../../models/CardList';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent {
  public searchCriterion: string;

  public onSearch(searchWord: string) {
    this.searchCriterion = searchWord;
  }
}
