import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { Log } from './log'
import { LogService } from './log.service'

import { DateString } from './dateString.pipe';
import { PrettyPrintPipe } from './prettyPrint.pipe';
import { CardIdNumberPipe } from './cardIdNumber.pipe'



@Component({
    templateUrl: 'app/log/log-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [DateString, PrettyPrintPipe, CardIdNumberPipe]
})

export class LogListComponent implements OnInit {
    pageTitle: string = 'Log List';
    logs: Log[];
    errorMessage: string;

    idNumberValues: string = '';

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