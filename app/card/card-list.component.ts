import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { ICard } from './card'
import { CardService } from './card.service'

@Component({
    templateUrl: 'app/card/card-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class CardListComponent implements OnInit {
    pageTitle: string = 'List';
    cards: ICard[];
    errorMessage: string;
    
    
    constructor(private _cardService: CardService) {
    }

    ngOnInit(): void {
        this._cardService.getCards()
            .subscribe(
                card => this.cards = card,
                error => this.errorMessage = <any>error);
    }

}