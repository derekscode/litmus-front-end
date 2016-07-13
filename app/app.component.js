System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '@angular/router-deprecated', './card/card.service', './card/card-list.component', './card/card-edit.component', './card/card-create.component', './log/log.service', './log/log-list.component', './location/location.service', './extensions/xhr'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, card_service_1, card_list_component_1, card_edit_component_1, card_create_component_1, log_service_1, log_list_component_1, location_service_1, http_2, core_2, xhr_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {},
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            },
            function (card_list_component_1_1) {
                card_list_component_1 = card_list_component_1_1;
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
            },
            function (location_service_1_1) {
                location_service_1 = location_service_1_1;
            },
            function (xhr_1_1) {
                xhr_1 = xhr_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_cardService) {
                    this._cardService = _cardService;
                    this.pageTitle = 'My App';
                    this.userStatus = 'userStatus';
                }
                AppComponent.prototype.ngOnInit = function () {
                    // this.userIsAdmin();
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
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map