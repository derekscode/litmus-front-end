System.register(['@angular/core', '@angular/router-deprecated', './card.service', './idNumber.pipe', './state.pipe', './location.pipe'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, card_service_1, idNumber_pipe_1, state_pipe_1, location_pipe_1;
    var CardListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            },
            function (idNumber_pipe_1_1) {
                idNumber_pipe_1 = idNumber_pipe_1_1;
            },
            function (state_pipe_1_1) {
                state_pipe_1 = state_pipe_1_1;
            },
            function (location_pipe_1_1) {
                location_pipe_1 = location_pipe_1_1;
            }],
        execute: function() {
            CardListComponent = (function () {
                function CardListComponent(_cardService) {
                    this._cardService = _cardService;
                    this.pageTitle = 'Card List';
                    this.idNumberValues = '';
                    this.stateValues = '';
                    this.locationValues = '';
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
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        pipes: [idNumber_pipe_1.IdNumberPipe, state_pipe_1.StatePipe, location_pipe_1.LocationPipe]
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