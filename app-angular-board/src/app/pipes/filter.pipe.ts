import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchWord: string): any[] {
    return searchWord
      ? value.filter((item: { name: string }) =>
          item.name.startsWith(searchWord)
        )
      : value;
  }
}
