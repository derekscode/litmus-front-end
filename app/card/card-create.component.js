System.register(['angular2/core', './card.service', './card'], function(exports_1, context_1) {
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
    var core_1, card_service_1, card_1;
    var CardCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            CardCreateComponent = (function () {
                function CardCreateComponent(_cardService) {
                    this._cardService = _cardService;
                    this.pageTitle = 'Create New Card';
                    this.card = new card_1.Card('F2187', 'CA');
                    this.submitted = false;
                }
                CardCreateComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // this.addCard(this.card);
                    this.addCard(this.card);
                };
                CardCreateComponent.prototype.addCard = function (card) {
                    var _this = this;
                    if (!card) {
                        return;
                    }
                    this._cardService.addCard(card)
                        .subscribe(function (data) { return _this.cards.push(data); }, function (error) { return _this.errorMessage = error; });
                };
                Object.defineProperty(CardCreateComponent.prototype, "diagnostic", {
                    // Remove this later
                    get: function () { return JSON.stringify(this.card); },
                    enumerable: true,
                    configurable: true
                });
                CardCreateComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/card/card-create.component.html'
                    }), 
                    __metadata('design:paramtypes', [card_service_1.CardService])
                ], CardCreateComponent);
                return CardCreateComponent;
            }());
            exports_1("CardCreateComponent", CardCreateComponent);
        }
    }
});
//# sourceMappingURL=card-create.component.js.map