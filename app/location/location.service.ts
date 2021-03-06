import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LocationService {
    constructor(private _http: Http) { }

    private _locationUrl = 'http://localhost:30408/api/location';

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