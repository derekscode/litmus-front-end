import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICard } from './card';

@Injectable()
export class CardService {
    // cards.json
    private _cardUrl = 'api/cards/cards.json';

    // LitmusWithoutAuthentication - works
    // private _cardUrl = 'http://localhost:25137/api/card';

    // LitmusWithAuthentication - breaks
    // private _cardUrl = 'http://localhost:25466/api/card';

    // Litmus
    // private _cardUrl = 'http://localhost:8462/api/card';


    constructor(private _http: Http) { }

    getCards(): Observable<ICard[]> {
        return this._http.get(this._cardUrl)
            .map((response: Response) => <ICard[]>response.json())
            .do(data => console.log("getCards: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCard(id: number): Observable<ICard> {
        return this.getCards()
            .map((cards: ICard[]) => cards.find(p => p.id === id))
            .do(data => console.log("getCard: " + JSON.stringify(data)))
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}
