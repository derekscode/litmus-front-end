import {  PipeTransform, Pipe } from 'angular2/core';
import { ICard } from './card';


@Pipe({
    name: 'cardFilter'
})

export class CardFilterPipe implements PipeTransform {
    transform(value: ICard[], args: string[]): ICard[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: ICard) =>
            product.state.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}