import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { Card } from './card'
import { CardService } from './card.service'
import { CardFilterPipe } from './card-filter.pipe'


@Component({
    templateUrl: 'app/card/card-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [CardFilterPipe]
})

export class CardListComponent implements OnInit {
    pageTitle: string = 'Card List';
    cards: Card[];
    errorMessage: string;
    listFilter: string;

    constructor(private _cardService: CardService) { }

    ngOnInit(): void {
        this.getCards();   
    }
    

    getCards() {
        this._cardService.getCards()
            .subscribe(
            result => this.cards = result,
            error => this.errorMessage = <any>error);
    }

}