import {Component} from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'

import {IdListComponent} from './id/id-list.component'
import {IdDetailComponent} from './id/id-detail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})


@RouteConfig([
    { path: '/list', name: 'IdList', component: IdListComponent, useAsDefault: true },
    { path: '/detail', name: 'IdDetail', component: IdDetailComponent }
])

export class AppComponent { 
    pageTitle: string = 'My App';
}