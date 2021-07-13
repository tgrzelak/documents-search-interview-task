import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentType } from '../shared/enums/document-type.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() active: DocumentType;
  @Output() changeCategory = new EventEmitter<DocumentType>();
  categories = DocumentType;

  onCategoryClick(category: DocumentType) {
    this.changeCategory.emit(category);
  }
}
