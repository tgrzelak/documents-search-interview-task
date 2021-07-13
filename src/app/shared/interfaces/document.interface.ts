import { DocumentType } from '../enums/document-type.enum';

export interface Document {
  name: string;
  type: DocumentType;
}
