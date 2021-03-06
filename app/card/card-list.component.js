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
var idNumber_pipe_1 = require('./idNumber.pipe');
var state_pipe_1 = require('./state.pipe');
var location_pipe_1 = require('./location.pipe');
var CardListComponent = (function () {
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
exports.CardListComponent = CardListComponent;
//# sourceMappingURL=card-list.component.js.map