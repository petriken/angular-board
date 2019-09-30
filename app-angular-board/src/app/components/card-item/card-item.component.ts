import { Component, Input } from "@angular/core";
import Card from "src/app/models/Card";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent {
  @Input() public item: Card;

  public dueDate = new Date().toISOString();

  public handleClick(event: MouseEvent) {
    this.item.isClicked = !this.item.isClicked;
  }
}
