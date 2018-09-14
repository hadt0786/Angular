import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name :'summary'
})

export class SummarypipePipe implements PipeTransform {
    transform(value: any, args?: number): any {

        console.log(value);
    // Implement your pipe functionality here
    }
}
