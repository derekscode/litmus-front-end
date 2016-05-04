System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Card;
    return {
        setters:[],
        execute: function() {
            Card = (function () {
                function Card(cardId, state) {
                    this.cardId = cardId;
                    this.state = state;
                }
                return Card;
            }());
            exports_1("Card", Card);
        }
    }
});
// export interface ICard {
//     cardId: string,
//     state: string
//     id: number;
//     version: string;
//     orientation: string;
//     expiration: string;
//     birthYear: number;
//     notes: string;
//     isDamaged: boolean;
//     isPaper: boolean;
//     hasMagstripe: boolean;
//     hasBarcode: boolean;
//     location: string;
// } 
//# sourceMappingURL=card.js.map