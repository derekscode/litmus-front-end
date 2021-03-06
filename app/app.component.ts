import {Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http'
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated'

//Card
import {CardService} from './card/card.service'

import {CardListComponent} from './card/card-list.component'
import {CardEditComponent} from './card/card-edit.component'
import {CardCreateComponent} from './card/card-create.component'

//Log
import {LogService} from './log/log.service'

import {LogListComponent} from './log/log-list.component'

//Location
import { LocationService } from './location/location.service';

//xhr withCredentials
import { BrowserXhr } from "@angular/http";
import { Injectable, provide } from "@angular/core";
import { CORSBrowserXHR } from './extensions/xhr'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CardService, LogService, LocationService,
        ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(BrowserXhr, { useClass: CORSBrowserXHR })]
})


@RouteConfig([
    //card 
    { path: '/card/list', name: 'CardList', component: CardListComponent, useAsDefault: true },
    { path: '/card/edit/:id', name: 'CardEdit', component: CardEditComponent },
    { path: '/card/create', name: 'CardCreate', component: CardCreateComponent },

    //log
    { path: '/log/list', name: 'LogList', component: LogListComponent }
])

export class AppComponent {
    constructor(private _cardService: CardService) { }
    pageTitle: string = 'My App';
    
    admin: boolean;
    userStatus: string = 'userStatus';

    errorMessage: string;


    ngOnInit(): void {
        this.userIsAdmin();
    }

    userIsAdmin() {
        this._cardService.userIsAdmin()
            .subscribe(
            result => this.admin = result,
            error => this.errorMessage = <any>error,
            () => this.getUserStatus()
            );
    }

    getUserStatus() {
        if (this.admin == true) {
            this.userStatus = "admin";
        } else {
            this.userStatus = "user";
        }
    }
}

