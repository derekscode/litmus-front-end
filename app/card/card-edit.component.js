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
var location_service_1 = require('../location/location.service');
var CardEditComponent = (function () {
    function CardEditComponent(_cardService, _locationService, _router, _routeParams) {
        this._cardService = _cardService;
        this._locationService = _locationService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.pageTitle = 'Edit Card';
    }
    CardEditComponent.prototype.ngOnInit = function () {
        if (!this.card) {
            var id = +this._routeParams.get('id');
            this.getCard(id);
            this.getLocations();
        }
    };
    CardEditComponent.prototype.onSubmit = function () {
        // call to service
        this.updateCard(this.card);
    };
    CardEditComponent.prototype.getLocations = function () {
        var _this = this;
        this._locationService.getLocations()
            .subscribe(function (result) { return _this.locations = result; }, function (error) { return _this.errorMessage = error; });
    };
    CardEditComponent.prototype.getCard = function (id) {
        var _this = this;
        this._cardService.getCard(id)
            .subscribe(function (result) { return _this.card = result; }, function (error) { return _this.errorMessage = error; });
    };
    CardEditComponent.prototype.updateCard = function (updatedCard) {
        var _this = this;
        // call to service to update record in database
        this._cardService.updateCard(updatedCard)
            .subscribe(function (result) { return _this.response = result; }, function (error) { return _this.errorMessage = error; }, function () { return _this._router.navigate(['CardList']); });
    };
    CardEditComponent.prototype.onDelete = function () {
        this.deleteCard(this.card.id);
    };
    CardEditComponent.prototype.deleteCard = function (id) {
        var _this = this;
        this._cardService.deleteCard(id)
            .subscribe(function (result) { return _this.response = result; }, function (error) { return _this.errorMessage = error; }, function () { return _this._router.navigate(['CardList']); });
    };
    CardEditComponent.prototype.onBack = function () {
        this._router.navigate(['CardList']);
    };
    Object.defineProperty(CardEditComponent.prototype, "diagnostic", {
        // Remove this later
        get: function () { return JSON.stringify(this.card); },
        enumerable: true,
        configurable: true
    });
    CardEditComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/card/card-edit.component.html'
        }), 
        __metadata('design:paramtypes', [card_service_1.CardService, location_service_1.LocationService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], CardEditComponent);
    return CardEditComponent;
}());
exports.CardEditComponent = CardEditComponent;
//# sourceMappingURL=card-edit.component.js.map