import { PipeTransform, Pipe } from 'angular2/core';
import { Card } from './card';


@Pipe({
    name: 'locationPipe'
})

export class LocationPipe implements PipeTransform {
    transform(value: Card[], args: string[]): Card[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((card: Card) =>
            card.location.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}