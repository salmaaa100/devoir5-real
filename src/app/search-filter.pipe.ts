import { Pipe, PipeTransform } from '@angular/core';
import { Musician } from './models/musician.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Musician[], filterText: string): Musician[] {
    if (!list) {
      return [];
    }
    if (!filterText) {
      return list;
    }
    return list.filter(item => item.nom.toLowerCase().includes(filterText.toLowerCase()));
  }
}
