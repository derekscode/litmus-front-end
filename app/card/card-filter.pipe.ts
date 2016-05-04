import {  PipeTransform, Pipe } from 'angular2/core';
import { Card } from './card';


@Pipe({
    name: 'cardFilter'
})

export class CardFilterPipe implements PipeTransform {
    transform(value: Card[], args: string[]): Card[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: Card) =>
            product.state.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}