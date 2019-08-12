import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'filterUrl'
})
export class FilterUrlPipe implements PipeTransform {

  transform(value: string): any {
    console.log("Filtering")
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
  constructor(private sanitizer:DomSanitizer){}

}
