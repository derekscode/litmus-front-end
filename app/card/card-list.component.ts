import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { Card } from './card'
import { CardService } from './card.service'

import { IdNumberPipe } from './idNumber.pipe'
import { StatePipe } from './state.pipe'
import { LocationPipe } from './location.pipe'


@Component({
    templateUrl: 'app/card/card-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [IdNumberPipe, StatePipe, LocationPipe]
})

export class CardListComponent implements OnInit {
    pageTitle: string = 'Card List';
    cards: Card[];
    errorMessage: string;
    
    idNumberValues: string = '';
    stateValues: string = '';
    locationValues: string = '';

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