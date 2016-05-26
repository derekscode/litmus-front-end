import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'

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

//xhr
import {BrowserXhr} from "angular2/http";
import {Injectable, provide} from "angular2/core";
import { CORSBrowserXHR } from './xhr'

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
    pageTitle: string = 'My App';
}