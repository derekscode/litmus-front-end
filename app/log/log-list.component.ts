import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

import { Log } from './log'
import { LogService } from './log.service'

import { DateString } from './dateString.pipe';


@Component({
    templateUrl: 'app/log/log-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [DateString]
})

export class LogListComponent implements OnInit {
    pageTitle: string = 'Log List';
    logs: Log[];
    errorMessage: string;
    
    // myDate = new Date(1988,3,15); // April 15, 1988
    // myDate2 = new Date('2016-05-10T15:05:56.0045295');
    
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