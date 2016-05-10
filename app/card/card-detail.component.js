System.register(['angular2/core', 'angular2/router', './card.service'], function(exports_1, context_1) {
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
    var core_1, router_1, card_service_1;
    var CardDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            CardDetailComponent = (function () {
                function CardDetailComponent(_cardService, _router, _routeParams) {
                    this._cardService = _cardService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.pageTitle = 'Card Detail';
                }
                CardDetailComponent.prototype.ngOnInit = function () {
                    if (!this.card) {
                        var id = +this._routeParams.get('id');
                        this.getCard(id);
                    }
                };
                CardDetailComponent.prototype.getCard = function (id) {
                    var _this = this;
                    this._cardService.getCard(id)
                        .subscribe(function (result) { return _this.card = result; }, function (error) { return _this.errorMessage = error; });
                };
                CardDetailComponent.prototype.onDelete = function () {
                    this.deleteCard(this.card.id);
                };
                CardDetailComponent.prototype.deleteCard = function (id) {
                    var _this = this;
                    this._cardService.deleteCard(id)
                        .subscribe(function (result) { return _this.response = result; }, function (error) { return _this.errorMessage = error; }, function () { return _this._router.navigate(['CardList']); });
                };
                CardDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['CardList']);
                };
                CardDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/card/card-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [card_service_1.CardService, router_1.Router, router_1.RouteParams])
                ], CardDetailComponent);
                return CardDetailComponent;
            }());
            exports_1("CardDetailComponent", CardDetailComponent);
        }
    }
});
//# sourceMappingURL=card-detail.component.js.map