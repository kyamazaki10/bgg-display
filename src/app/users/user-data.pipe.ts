import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'userData' })
export class UserDataPipe implements PipeTransform {
  transform(value, own) {
    if (own && value === '1') return 'fa fa-check';
    if (value === 'Not Ranked' || value === 'N/A') return '';

    return value;
  }
}