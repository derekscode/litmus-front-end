import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LocationService {
    constructor(private _http: Http) { }

    private _locationUrl = 'http://localhost:8462/api/location';

    getLocations(): Observable<any[]> {
        return this._http.get(this._locationUrl)
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log("data: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    

    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }



}