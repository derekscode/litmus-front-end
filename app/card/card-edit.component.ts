import { Component } from 'angular2/core'
import { RouteParams, Router } from 'angular2/router'

import { Card } from './card';
import { CardService } from './card.service';

@Component({
    templateUrl: 'app/card/card-edit.component.html'
})

export class CardEditComponent {
    pageTitle: string = 'Card Edit';
    card: Card;
    errorMessage: string;

    constructor(
        private _cardService: CardService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.card) {
            let id = +this._routeParams.get('id');
            this.getCard(id);
        }
    }

    getCard(id: number) {
        this._cardService.getCard(id)
            .subscribe(
            card => this.card = card,
            error => this.errorMessage = <any>error);
    }
    
    // Remove this later
    get diagnostic() { return JSON.stringify(this.card); }
}

