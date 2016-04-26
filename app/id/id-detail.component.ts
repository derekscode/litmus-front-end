import { Component } from 'angular2/core'
import { RouteParams, Router } from 'angular2/router'

import { IId } from './id';
import { IdService } from './id.service';

@Component({
    templateUrl: 'app/id/id-detail.component.html',  
})

export class IdDetailComponent {
    pageTitle: string = 'Id Detail';

    constructor(
        private _idService: IdService,
        private _router: Router, 
        private _routeParams: RouteParams) {
        
    }
}