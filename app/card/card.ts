export class Card {
    constructor(
        public cardId: string,
        public state: string
    ) { }

    id: number;
    version: string;
    orientation: string;
    expiration: string;
    birthYear: number;
    notes: string;
    isDamaged: boolean;
    isPaper: boolean;
    hasMagstripe: boolean;
    hasBarcode: boolean;
    location: string;
}

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