import { Component, OnInit } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'

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
    constructor(private _cardService: CardService) { }

    pageTitle: string = 'Card List';
    cards: Card[];
    errorMessage: string;

    idNumberValues: string = '';
    stateValues: string = '';
    locationValues: string = '';


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