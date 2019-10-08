import { Component, Input, Output, EventEmitter } from "@angular/core";
import Card from "src/app/models/Card";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent {
  @Input() public item: Card;
  @Input() public isDone: boolean;
  @Input() public searchCriterion: string;
  @Input() public dueDate: string | Date;

  @Output() public remove = new EventEmitter<Card>();
  @Output() public expand = new EventEmitter<Card>();

  public handleClick() {
    this.expand.emit(this.item);
  }

  public onRemove() {
    this.remove.emit(this.item);
  }

  public onEdit(event: MouseEvent) {
    event.stopPropagation();
  }
}
