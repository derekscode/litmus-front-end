System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var CardService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CardService = (function () {
                function CardService(_http) {
                    this._http = _http;
                    // cards.json
                    // private _cardUrl = 'api/cards/cards.json';
                    // LitmusWithoutAuthentication - works
                    // private _cardUrl = 'http://localhost:25137/api/card';
                    // LitmusWithAuthentication - breaks
                    // private _cardUrl = 'http://:25466/api/card';
                    // ASP.NET Core 1.0
                    this._cardUrl = 'http://localhost:30408/api/card';
                }
                // ASP.NET Core RC1
                // private _cardUrl = 'http://localhost:8462/api/card';
                CardService.prototype.userIsAdmin = function () {
                    return this._http.get(this._cardUrl + "/UserIsAdmin")
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                CardService.prototype.getCards = function () {
                    return this._http.get(this._cardUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                CardService.prototype.getCard = function (id) {
                    return this.getCards()
                        .map(function (cards) { return cards.find(function (p) { return p.id === id; }); })
                        .catch(this.handleError);
                };
                CardService.prototype.addCard = function (card) {
                    var body = JSON.stringify(card);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this._http.post(this._cardUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                CardService.prototype.updateCard = function (updatedCard) {
                    var body = JSON.stringify(updatedCard);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this._http.put(this._cardUrl + "/" + updatedCard.id, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                CardService.prototype.deleteCard = function (id) {
                    var body = JSON.stringify(id);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this._http.delete(this._cardUrl + "/" + id, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                CardService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                CardService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                CardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CardService);
                return CardService;
            }());
            exports_1("CardService", CardService);
        }
    }
});
//# sourceMappingURL=card.service.js.map