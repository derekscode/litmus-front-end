import { Component } from 'angular2/core'
import { Card } from './card';

@Component({
    templateUrl: 'app/card/card-create.component.html'
})

export class CardCreateComponent {
    pageTitle: string = 'Create New Card';
    model = new Card('F2187', 'CA');
    submitted = false;


    onSubmit() { this.submitted = true; }


    // Remove this later
    get diagnostic() { return JSON.stringify(this.model); }


}