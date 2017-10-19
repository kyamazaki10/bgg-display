import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'userData' })
export class UserDataPipe implements PipeTransform {
  transform(value) {
    return value === '1' ? 'fa fa-check' : '';
  }
}