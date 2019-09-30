import { Component, Input, Output, EventEmitter } from "@angular/core";
import Card from "src/app/models/Card";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent {
  @Input() public item: Card;
  @Output() public remove = new EventEmitter<Card>();
  @Output() public expand = new EventEmitter<Card>();

  public dueDate = new Date().toISOString();

  public handleClick() {
    this.expand.emit(this.item);
  }

  public onRemove() {
    this.remove.emit(this.item);
  }
}
