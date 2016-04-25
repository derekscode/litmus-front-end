import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
    templateUrl: 'app/id/id-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class IdListComponent {
    pageTitle: string = 'id List';
    
}