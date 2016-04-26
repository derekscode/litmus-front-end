import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICard } from './card';

@Injectable()
export class CardService {
    private _idUrl = 'api/cards/cards.json';
    
    constructor(private _http: Http) { }
    
    getCards(): Observable<ICard[]> {
        return this._http.get(this._idUrl)
            .map((response: Response) => <ICard[]> response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}
