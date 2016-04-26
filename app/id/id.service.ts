import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IId } from './id';

@Injectable()
export class IdService {
    private _idUrl = 'api/ids/ids.json';
    
    constructor(private _http: Http) { }
    
    getIds(): Observable<IId[]> {
        return this._http.get(this._idUrl)
            .map((response: Response) => <IId[]> response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}
