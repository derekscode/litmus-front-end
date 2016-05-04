import { Component } from 'angular2/core'
import { CardService } from './card.service';
import { Card } from './card';


@Component({
    templateUrl: 'app/card/card-create.component.html'
})

export class CardCreateComponent {
    constructor(
        private _cardService: CardService) {
    }

    pageTitle: string = 'Create New Card';
    card = new Card('F2187', 'CA');
    submitted = false;
    errorMessage: string;
    cards: Card[];


    onSubmit() {
        this.submitted = true;
        // this.addCard(this.card);
        this.addCard(this.card);
    }

    addCard(card: Card) {
        if (!card) { return; }
        this._cardService.addCard(card)
            .subscribe(
            data => this.cards.push(data),
            error => this.errorMessage = <any>error);
    }



    // Remove this later
    get diagnostic() { return JSON.stringify(this.card); }


}