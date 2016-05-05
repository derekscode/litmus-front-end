System.register(['angular2/core', 'angular2/router', './card.service', './card-filter.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, card_service_1, card_filter_pipe_1;
    var CardListComponent;
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
            },
            function (card_filter_pipe_1_1) {
                card_filter_pipe_1 = card_filter_pipe_1_1;
            }],
        execute: function() {
            CardListComponent = (function () {
                function CardListComponent(_cardService) {
                    this._cardService = _cardService;
                    this.pageTitle = 'Card List';
                }
                CardListComponent.prototype.ngOnInit = function () {
                    this.getCards();
                };
                CardListComponent.prototype.getCards = function () {
                    var _this = this;
                    this._cardService.getCards()
                        .subscribe(function (result) { return _this.cards = result; }, function (error) { return _this.errorMessage = error; });
                };
                CardListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/card/card-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [card_filter_pipe_1.CardFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [card_service_1.CardService])
                ], CardListComponent);
                return CardListComponent;
            }());
            exports_1("CardListComponent", CardListComponent);
        }
    }
});
//# sourceMappingURL=card-list.component.js.map