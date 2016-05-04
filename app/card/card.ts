export interface ICard {
    cardId: string,
    state: string
    // id: number;
    // cardId: string;
    // state: string;
    // version: string;
    // orientation: string;
    // expiration: string;
    // birthYear: number;
    // notes: string;
    // isDamaged: boolean;
    // isPaper: boolean;
    // hasMagstripe: boolean;
    // hasBarcode: boolean;
    // location: string;
}

export class Card {
    constructor(
        public cardId: string,
        public state: string
    ) { }
}