import { Component } from 'angular2/core'
import { RouteParams, Router } from 'angular2/router'

import { Card } from './card';
import { CardService } from './card.service';
import { LocationService } from '../location/location.service';


@Component({
    templateUrl: 'app/card/card-edit.component.html'
})

export class CardEditComponent {
    pageTitle: string = 'Edit Card';
    card: Card;
    errorMessage: string;
    response: any;

    locations: any;

    constructor(
        private _cardService: CardService,
        private _locationService: LocationService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.card) {
            let id = +this._routeParams.get('id');
            this.getCard(id);
            this.getLocations();
        }
    }

    onSubmit() {
        // call to service
        this.updateCard(this.card);
    }

    getLocations() {
        this._locationService.getLocations()
            .subscribe(
            result => this.locations = result,
            error => this.errorMessage = <any>error);
    }

    getCard(id: number) {
        this._cardService.getCard(id)
            .subscribe(
            result => this.card = result,
            error => this.errorMessage = <any>error);
    }

    updateCard(updatedCard: Card) {
        // call to service to update record in database
        this._cardService.updateCard(updatedCard)
            .subscribe(
            result => this.response = result,
            error => this.errorMessage = <any>error,
            () => this._router.navigate(['CardList'])
            );
    }

    onDelete() {
        this.deleteCard(this.card.id);
    }

    deleteCard(id: number) {
        this._cardService.deleteCard(id)
            .subscribe(
            result => this.response = result,
            error => this.errorMessage = <any>error,
            () => this._router.navigate(['CardList'])
            );
    }

    onBack(): void {
        this._router.navigate(['CardList']);
    }



    // Remove this later
    get diagnostic() { return JSON.stringify(this.card); }
}

