import { Component } from '@angular/core';

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
