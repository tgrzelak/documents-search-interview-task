import { DocumentType } from './shared/enums/document-type.enum';
import { Document } from './shared/interfaces/document.interface';

export const DOCUMENTS: Document[] = [
  { name: 'Terminal instructables', type: DocumentType.Technical },
  { name: 'Installation guides', type: DocumentType.Technical },
  { name: 'Career opportunities', type: DocumentType.HumanResources },
  { name: 'Customer onboarding', type: DocumentType.Financial },
  { name: 'Outlet branding', type: DocumentType.Marketing },
  { name: 'Accounting procedures', type: DocumentType.Financial },
  { name: 'Training', type: DocumentType.HumanResources },
  { name: 'Priting guidance', type: DocumentType.Marketing },
  { name: 'Technical support', type: DocumentType.Technical },
];
