import { PipeTransform, Pipe } from '@angular/core';
import { Card } from './card';


@Pipe({
    name: 'statePipe'
})

export class StatePipe implements PipeTransform {
    transform(value: Card[], args: string[]): Card[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((card: Card) =>
            card.state.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}