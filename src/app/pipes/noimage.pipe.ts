import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  transform(images: any[]): string {
    if (!images) {
      return 'http://plantillo.net/uploads/jMtI1bioC0h8jrLomG0I-1523301896.png';
    }
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'http://plantillo.net/uploads/jMtI1bioC0h8jrLomG0I-1523301896.png';
    }
    return null;
  }
}
