import { SearchComponent } from './search/search.component';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DocumentType } from './shared/enums/document-type.enum';
import { Document } from './shared/interfaces/document.interface';
import { CategoryFilterService } from './shared/services/category-filter.service';
import { of } from 'rxjs';
import { DOCUMENTS } from './documents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(SearchComponent, { static: false }) search: SearchComponent;
  title = 'documents-search-interview-task';
  filteredDocuments: Document[];
  active: DocumentType = DocumentType.All;
  documents: Document[] = DOCUMENTS;

  constructor(private cfs: CategoryFilterService) {}

  ngOnInit(): void {
    this.filteredDocuments = this.documents;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.resetFilters();
    });
  }

  onChangeCategory(category: DocumentType) {
    this.filteredDocuments = this.cfs.categoryFilter(category, this.documents);
    this.active = category;
    category !== DocumentType.All ? this.onSearch() : this.resetFilters();
    this.search.pattern = '';
  }

  onSearch(pattern: string = '') {
    if (this.active !== DocumentType.All) {
      this.filteredDocuments = this.cfs.searchByName(
        pattern,
        this.documents.filter((el) => el.type === this.active)
      );
    } else {
      this.filteredDocuments = this.cfs.searchByName(
        pattern,
        this.documents.filter((el) =>
          Object.values(DocumentType)
            .filter((el) => el !== DocumentType.All)
            .includes(el.type)
        )
      );
    }
    this.search.filteredOptions = of(this.filteredDocuments);
  }

  private resetFilters() {
    this.search.filteredOptions = of(this.documents);
  }
}
