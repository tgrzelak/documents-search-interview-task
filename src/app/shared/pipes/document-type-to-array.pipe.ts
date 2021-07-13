import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentTypeToArray'
})
export class DocumentTypeToArrayPipe implements PipeTransform {

  transform(data: Object) {
    return Object.values(data);
  }

}
