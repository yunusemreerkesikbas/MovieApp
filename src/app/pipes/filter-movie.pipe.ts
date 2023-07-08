import { Pipe, PipeTransform } from '@angular/core';
import { MovieList } from '../models/Movie';

@Pipe({
  name: 'filterMovie',
})
export class FilterMoviePipe implements PipeTransform {
  transform(value: MovieList[], filterText: string): MovieList[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (p: MovieList) =>
            p.title.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
