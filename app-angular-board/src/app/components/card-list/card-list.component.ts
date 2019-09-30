import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CardItemComponent } from "../card-item/card-item.component";
import CardList from "src/app/models/CardList";
import Card from "src/app/models/Card";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent {
  @Input() items: Card[];
  @Input() card: CardList;
  @Output() public remove = new EventEmitter<any>();
  @Output() public expand = new EventEmitter<any>();

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
