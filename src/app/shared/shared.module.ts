import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentTypeToArrayPipe } from './pipes/document-type-to-array.pipe';
import { TagThemeDirective } from './directives/tag-theme.directive';

const APP_SHARED_PIPES = [DocumentTypeToArrayPipe];
const APP_SHARED_DIRECCTIVE = [TagThemeDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [APP_SHARED_PIPES, APP_SHARED_DIRECCTIVE],
  exports: [APP_SHARED_PIPES, APP_SHARED_DIRECCTIVE, CommonModule, FormsModule],
})
export class SharedModule {}
