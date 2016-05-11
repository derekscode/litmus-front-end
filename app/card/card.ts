export class Card {
    id: number;
    cardId: string;
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
    
    lastChanged: Date;
    displayLastChanged: string;
}