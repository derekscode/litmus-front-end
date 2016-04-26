import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'

import {IdService} from './id/id.service'

import {IdListComponent} from './id/id-list.component'
import {IdDetailComponent} from './id/id-detail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [IdService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})


@RouteConfig([
    { path: '/list', name: 'IdList', component: IdListComponent, useAsDefault: true },
    { path: '/detail/:id', name: 'IdDetail', component: IdDetailComponent }
])

export class AppComponent { 
    pageTitle: string = 'My App';
}