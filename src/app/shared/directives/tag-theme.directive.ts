import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { DocumentType } from '../enums/document-type.enum';
import { Document } from '../interfaces/document.interface';

@Directive({
  selector: '[tagTheme]',
})
export class TagThemeDirective implements AfterViewInit {
  @Input() document: Document;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setBackgroundColorBaseOnCategory();
  }

  private setBackgroundColorBaseOnCategory() {
    switch (this.document.type) {
      case DocumentType.Technical:
        this.changeBackgroundColor('#e7dfeb');
        break;
      case DocumentType.Financial:
        this.changeBackgroundColor('#e5eade');
        break;
      case DocumentType.HumanResources:
        this.changeBackgroundColor('#deeae9');
        break;
      case DocumentType.Marketing:
        this.changeBackgroundColor('#eae4de');
        break;
      default:
        this.changeBackgroundColor('#e7dfeb');
        break;
    }
  }

  private changeBackgroundColor(colorHex: string) {
    this.elRef.nativeElement.style.backgroundColor = colorHex;
  }
}
