import {Pipe, PipeTransform} from 'angular2/core';
import {DatePipe} from 'angular2/common';

@Pipe({
    name: 'dateString'
})


// convert string and format it to Date
export class DateString implements PipeTransform {
    transform(value: string, args: any[]): string {
        var parsedDate = Date.parse(value);
        if (isNaN(parsedDate)) {
            return "";
        }
        else {
            return new DatePipe().transform(new Date(parsedDate), args);
        }
    }
}