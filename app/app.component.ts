import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'

import {CardService} from './card/card.service'

import {CardListComponent} from './card/card-list.component'
import {CardDetailComponent} from './card/card-detail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CardService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})


@RouteConfig([
    { path: '/list', name: 'CardList', component: CardListComponent, useAsDefault: true },
    { path: '/detail/:id', name: 'CardDetail', component: CardDetailComponent }
])

export class AppComponent { 
    pageTitle: string = 'My App';
}