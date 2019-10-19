import { Component, Input, Output, EventEmitter } from '@angular/core';
import CardList from 'src/app/board/models/CardList';
import Card from 'src/app/board/models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() items: Card[];
  @Input() card: CardList;
  @Input() isDone: boolean;
  @Output() public remove = new EventEmitter<any>();
  @Output() public expand = new EventEmitter<any>();
  @Input() public searchCriterion: string;

  expandItem(item: Card) {
    this.expand.emit({
      list: this.items,
      item
    });
  }

  onRemove(item: Card) {
    this.remove.emit({
      list: this.items,
      item
    });
  }
}
