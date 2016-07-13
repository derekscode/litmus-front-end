import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Log } from './log';

@Injectable()
export class LogService {
    constructor(private _http: Http) { }
    
    private _logUrl = 'http://localhost:30408/api/log';
    
    
    getLogs(): Observable<Log[]> {
        return this._http.get(this._logUrl)
            .map((response: Response) => <Log[]>response.json())
            // .do(data => console.log("getLogs: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    
     private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}