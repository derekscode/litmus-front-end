System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './card/card.service', './card/card-list.component', './card/card-detail.component', './card/card-edit.component', './card/card-create.component', './log/log.service', './log/log-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, card_service_1, card_list_component_1, card_detail_component_1, card_edit_component_1, card_create_component_1, log_service_1, log_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            },
            function (card_list_component_1_1) {
                card_list_component_1 = card_list_component_1_1;
            },
            function (card_detail_component_1_1) {
                card_detail_component_1 = card_detail_component_1_1;
            },
            function (card_edit_component_1_1) {
                card_edit_component_1 = card_edit_component_1_1;
            },
            function (card_create_component_1_1) {
                card_create_component_1 = card_create_component_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (log_list_component_1_1) {
                log_list_component_1 = log_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'My App';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [card_service_1.CardService, log_service_1.LogService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        //card 
                        { path: '/card/list', name: 'CardList', component: card_list_component_1.CardListComponent, useAsDefault: true },
                        { path: '/card/detail/:id', name: 'CardDetail', component: card_detail_component_1.CardDetailComponent },
                        { path: '/card/edit/:id', name: 'CardEdit', component: card_edit_component_1.CardEditComponent },
                        { path: '/card/create', name: 'CardCreate', component: card_create_component_1.CardCreateComponent },
                        //log
                        { path: '/log/list', name: 'LogList', component: log_list_component_1.LogListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map