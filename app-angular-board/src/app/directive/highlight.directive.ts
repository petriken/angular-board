import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input() isDone: boolean;
  @Input() dueDate: number;
  public currentDate: number = new Date().getTime();

  constructor(private elementRef: ElementRef) {}

  public ngOnChanges(): void {
    const dayDifference: number = Math.floor(
      (this.dueDate - this.currentDate) / 1000 / 60 / 60 / 24
    );
    if (!this.isDone) {
      if (dayDifference < 3) {
        this.elementRef.nativeElement.style.background = "red";
      } else if (dayDifference < 7) {
        this.elementRef.nativeElement.style.background = "yellow";
      }
    }
  }
}
