import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { IId } from './id'
import { IdService } from './id.service'

@Component({
    templateUrl: 'app/id/id-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class IdListComponent implements OnInit {
    pageTitle: string = 'List';
    ids: IId[];
    errorMessage: string;
    
    
    constructor(private _idService: IdService) {
    }

    ngOnInit(): void {
        this._idService.getIds()
            .subscribe(
                products => this.ids = products,
                error => this.errorMessage = <any>error);
    }

}