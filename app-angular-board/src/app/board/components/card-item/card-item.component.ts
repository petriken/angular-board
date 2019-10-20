import { Component, Input, Output, EventEmitter } from '@angular/core';
import Card from 'src/app/board/models/Card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})

export class CardItemComponent {
  @Input() public item: Card;
  @Input() public isDone: boolean;
  @Input() public searchCriterion: string;
  @Input() public dueDate: string | Date;

  @Output() public remove = new EventEmitter<Card>();
  @Output() public expand = new EventEmitter<Card>();
  @Output() public edit = new EventEmitter<Card>();

  constructor(public router: Router) { }

  public handleClick() {
    this.expand.emit(this.item);
  }

  public onRemove() {
    this.remove.emit(this.item);
  }

  public onEdit(event: MouseEvent) {
    event.stopPropagation();
    // this.router.navigate(['board-page', 'edit-page']);
    this.edit.emit(this.item);

  }
}
