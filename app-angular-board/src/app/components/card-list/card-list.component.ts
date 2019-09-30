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
  @Input() items: CardList[];
  @Input() card: Card;
  // @Input() searchCriterion: string
  // @Input() item: Card;
  // public  cardList: CardList[];

  handleClick(event: MouseEvent) {}
}
