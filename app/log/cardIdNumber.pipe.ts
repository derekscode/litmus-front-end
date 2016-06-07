import { PipeTransform, Pipe } from '@angular/core';
import { Log } from './log';


@Pipe({
    name: 'cardIdNumberPipe'
})

export class CardIdNumberPipe implements PipeTransform {
    transform(value: Log[], args: string[]): Log[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((log: Log) =>
            log.cardIdNumber.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}