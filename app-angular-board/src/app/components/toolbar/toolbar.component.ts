import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent {
  public searchCriterion: string;

  @Output() public search = new EventEmitter<string>();

  public onSearch() {
    this.search.emit(this.searchCriterion);
  }
}
