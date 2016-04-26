import { Component } from 'angular2/core'
import { RouteParams, Router } from 'angular2/router'

import { ICard } from './card';
import { CardService } from './card.service';

@Component({
    templateUrl: 'app/card/card-detail.component.html',  
})

export class CardDetailComponent {
    pageTitle: string = 'Card Detail';

    constructor(
        private _cardService: CardService,
        private _router: Router, 
        private _routeParams: RouteParams) {
        
    }
}