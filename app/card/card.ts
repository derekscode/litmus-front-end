export interface ICard {
    idNumber: number;
    state: string;
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

