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
var router_deprecated_1 = require('@angular/router-deprecated');
var card_service_1 = require('./card.service');
var card_1 = require('./card');
var CardCreateComponent = (function () {
    function CardCreateComponent(_cardService, _router) {
        this._cardService = _cardService;
        this._router = _router;
        this.pageTitle = 'Create New Card';
        this.card = new card_1.Card();
        this.submitted = false;
    }
    CardCreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.addCard(this.card);
        // alert("Card submitted!");
    };
    CardCreateComponent.prototype.addCard = function (card) {
        var _this = this;
        if (!card) {
            return;
        }
        this._cardService.addCard(card)
            .subscribe(function (result) { return _this.response = result; }, function (error) { return _this.errorMessage = error; }, function () { return _this.navigatetoCardEdit(); });
    };
    CardCreateComponent.prototype.navigatetoCardEdit = function () {
        var newId = this.response.id;
        this._router.navigate(['CardEdit', { id: newId }]);
    };
    CardCreateComponent.prototype.onBack = function () {
        this._router.navigate(['CardList']);
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
        __metadata('design:paramtypes', [card_service_1.CardService, router_deprecated_1.Router])
    ], CardCreateComponent);
    return CardCreateComponent;
}());
exports.CardCreateComponent = CardCreateComponent;
//# sourceMappingURL=card-create.component.js.map