import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'summarypipe' // Pipe name
})
export class SummarypipePipe implements PipeTransform {
transform(value: any, args?: number): any {
// Implement your pipe functionality here

if(!value) return null;
return value.substr(0,30)+"...";
}
}