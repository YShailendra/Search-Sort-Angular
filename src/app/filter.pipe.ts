import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterArg: any): any[] {
    if (!items) return [];
    if (!filterArg) return items;
    var searchText = filterArg.toLowerCase();//to lower case
    return items.filter(it => {
      return (it.title && it.title.toLowerCase().includes(searchText))
      
    });
  }

}
