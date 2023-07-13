import { Pipe, PipeTransform } from '@angular/core';
import { MovieListModel } from '@models/movieListModel';

@Pipe({
  name: 'filterMovie',
})
export class FilterMoviePipe implements PipeTransform {
  transform(value: MovieListModel[], filterText: string): MovieListModel[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (p: MovieListModel) =>
            p.title.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
