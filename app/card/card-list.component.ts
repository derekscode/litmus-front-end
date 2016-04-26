import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { ICard } from './card'
import { CardService } from './card.service'
import { CardFilterPipe } from './card-filter.pipe'


@Component({
    templateUrl: 'app/card/card-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [CardFilterPipe]
})

export class CardListComponent implements OnInit {
    pageTitle: string = 'List';
    cards: ICard[];
    errorMessage: string;
    listFilter: string;
    
    
    constructor(private _cardService: CardService) {
    }

    ngOnInit(): void {
        this._cardService.getCards()
            .subscribe(
                card => this.cards = card,
                error => this.errorMessage = <any>error);
    }

}