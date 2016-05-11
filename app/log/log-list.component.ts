import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { Log } from './log'
import { LogService } from './log.service'


@Component({
    templateUrl: 'app/log/log-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class LogListComponent implements OnInit {
    pageTitle: string = 'Log List';
    logs: Log[];
    errorMessage: string;
    exampleDate = new Date(1988,3,15); // April 15, 1988


    constructor(private _logService: LogService) { }

    ngOnInit(): void {
        this.getLogs();
    }


    getLogs() {
        this._logService.getLogs()
            .subscribe(
            result => this.logs = result,
            error => this.errorMessage = <any>error);
    }

}