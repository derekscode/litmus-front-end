import { Component } from 'angular2/core'
import { RouteParams, Router } from 'angular2/router'

import { Card } from './card';
import { CardService } from './card.service';

@Component({
    templateUrl: 'app/card/card-edit.component.html'
})

export class CardEditComponent {
    pageTitle: string = 'Edit Card';
    card: Card;
    errorMessage: string;
    response: any;

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

    onSubmit() {
        this.updateCard(this.card);
        alert("Card updated!");        
        this._router.navigate(['/CardList']);
    }
    
    onDelete(){
        this.deleteCard(this.card.id);
        alert("Card deleted!");
        this._router.navigate(['/CardList']);
    }
    
    
    

    getCard(id: number) {
        this._cardService.getCard(id)
            .subscribe(
            result => this.card = result,
            error => this.errorMessage = <any>error);
    }

    updateCard(updatedCard: Card) {
        this._cardService.updateCard(updatedCard)
            .subscribe(
            result => this.response = result,
            error => this.errorMessage = <any>error);
    }

    deleteCard(id: number) {
        this._cardService.deleteCard(id)
            .subscribe(
            result => this.response = result,
            error => this.errorMessage = <any>error);
    }

    // Remove this later
    get diagnostic() { return JSON.stringify(this.card); }
}

