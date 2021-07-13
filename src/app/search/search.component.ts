import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../shared/interfaces/document.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() onSearch = new EventEmitter<string>();
  pattern: string;
  filteredOptions: Observable<Document[]>;

  onPatternChange(pattern: string) {
    this.onSearch.emit(pattern);
  }
}
