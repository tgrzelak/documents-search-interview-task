import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentType } from '../shared/enums/document-type.enum';
import { Document } from '../shared/interfaces/document.interface';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent {
  @Input() document: Document;
  @Output() tagClick = new EventEmitter<DocumentType>();

  onTagClick(category: DocumentType) {
    this.tagClick.emit(category);
  }
}
