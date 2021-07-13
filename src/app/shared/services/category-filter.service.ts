import { Injectable } from '@angular/core';
import { DocumentType } from '../enums/document-type.enum';
import { Document } from '../interfaces/document.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryFilterService {

  categoryFilter(category: DocumentType, documents: Document[]): Document[] {
    if (category === DocumentType.All) {
      return documents;
    } else {
      return documents.filter(el => el.type === category);
    }
  }

  searchByName(pattern: string, documents: Document[]): Document[] {
    return documents.filter(el => el.name.toLowerCase().includes(pattern.toLowerCase()));
  }
}
