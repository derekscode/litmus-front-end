import { Component } from '@angular/core'
import { Router } from '@angular/router-deprecated'

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
    card = new Card();
    submitted = false;
    errorMessage: string;
    cards: Card[];
    response: any;


    onSubmit() {
        this.submitted = true;
        this.addCard(this.card);
        // alert("Card submitted!");
    }

    addCard(card: Card) {
        if (!card) { return; }
        this._cardService.addCard(card)
            .subscribe(
            result => this.response = result,
            error => this.errorMessage = <any>error,
            () => this.navigatetoCardEdit()
            );
    }

    navigatetoCardEdit() {
        var newId = this.response.id;
        this._router.navigate(['CardEdit', { id: newId }]);
    }

    onBack(): void {
        this._router.navigate(['CardList']);
    }



    // Remove this later
    get diagnostic() { return JSON.stringify(this.card); }


}