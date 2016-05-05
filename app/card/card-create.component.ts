import { Component } from 'angular2/core'
import { Router } from 'angular2/router'

import { CardService } from './card.service';
import { Card } from './card';


@Component({
    templateUrl: 'app/card/card-create.component.html'
})

export class CardCreateComponent {
       constructor(
        private _cardService: CardService,
        private _router: Router
        ) {
    }

    pageTitle: string = 'Create New Card';
    card = new Card('F2187', 'CA');
    submitted = false;
    errorMessage: string;
    cards: Card[];
    response: any;


    onSubmit() {
        this.submitted = true;
        this.addCard(this.card);
        alert("Card submitted!");
        this._router.navigate(['CardList']);

    }

    addCard(card: Card) {
        if (!card) { return; }
        this._cardService.addCard(card)
            .subscribe(
            result => this.response = result,
            error => this.errorMessage = <any>error);
    }



    // Remove this later
    get diagnostic() { return JSON.stringify(this.card); }


}