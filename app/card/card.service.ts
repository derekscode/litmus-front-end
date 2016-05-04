import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Card } from './card';

@Injectable()
export class CardService {
    constructor(private _http: Http) { }

    // cards.json
    // private _cardUrl = 'api/cards/cards.json';

    // LitmusWithoutAuthentication - works
    // private _cardUrl = 'http://localhost:25137/api/card';

    // LitmusWithAuthentication - breaks
    // private _cardUrl = 'http://localhost:25466/api/card';

    // Litmus
    private _cardUrl = 'http://localhost:8462/api/card';


    getCards(): Observable<Card[]> {
        return this._http.get(this._cardUrl)
            .map((response: Response) => <Card[]>response.json())
            // .do(data => console.log("getCards: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCard(id: number): Observable<Card> {
        return this.getCards()
            .map((cards: Card[]) => cards.find(p => p.id === id))
            // .do(data => console.log("getCard: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    addCard(card: Card): Observable<string> {
        let body = JSON.stringify(card);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._cardUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateCard(updatedCard: Card): Observable<string> {
        let body = JSON.stringify(updatedCard);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this._cardUrl + "/" + updatedCard.id, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteCard(id: number): Observable<Card> {
        let body = JSON.stringify(id);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.delete(this._cardUrl + "/" + id, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
