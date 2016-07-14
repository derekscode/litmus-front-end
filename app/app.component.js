"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx'); // Load all features
var router_deprecated_1 = require('@angular/router-deprecated');
//Card
var card_service_1 = require('./card/card.service');
var card_list_component_1 = require('./card/card-list.component');
var card_edit_component_1 = require('./card/card-edit.component');
var card_create_component_1 = require('./card/card-create.component');
//Log
var log_service_1 = require('./log/log.service');
var log_list_component_1 = require('./log/log-list.component');
//Location
var location_service_1 = require('./location/location.service');
//xhr withCredentials
var http_2 = require("@angular/http");
var core_2 = require("@angular/core");
var xhr_1 = require('./extensions/xhr');
var AppComponent = (function () {
    function AppComponent(_cardService) {
        this._cardService = _cardService;
        this.pageTitle = 'My App';
        this.userStatus = 'userStatus';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userIsAdmin();
    };
    AppComponent.prototype.userIsAdmin = function () {
        var _this = this;
        this._cardService.userIsAdmin()
            .subscribe(function (result) { return _this.admin = result; }, function (error) { return _this.errorMessage = error; }, function () { return _this.getUserStatus(); });
    };
    AppComponent.prototype.getUserStatus = function () {
        if (this.admin == true) {
            this.userStatus = "admin";
        }
        else {
            this.userStatus = "user";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [card_service_1.CardService, log_service_1.LogService, location_service_1.LocationService,
                router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_2.provide(http_2.BrowserXhr, { useClass: xhr_1.CORSBrowserXHR })]
        }),
        router_deprecated_1.RouteConfig([
            //card 
            { path: '/card/list', name: 'CardList', component: card_list_component_1.CardListComponent, useAsDefault: true },
            { path: '/card/edit/:id', name: 'CardEdit', component: card_edit_component_1.CardEditComponent },
            { path: '/card/create', name: 'CardCreate', component: card_create_component_1.CardCreateComponent },
            //log
            { path: '/log/list', name: 'LogList', component: log_list_component_1.LogListComponent }
        ]), 
        __metadata('design:paramtypes', [card_service_1.CardService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map