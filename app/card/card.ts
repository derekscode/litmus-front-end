export class Card {
    constructor() {
        this.state = "CA"
        this.location = "IDV"
    }
    id: number;
    idNumber: string;
    state: string;
    
    version: string;
    orientation: string;
    expiration: string;
    birthYear: number;
    
    isDamaged: boolean;
    isPaper: boolean;
    hasMagstripe: boolean;
    hasBarcode: boolean;
    location: string;
    notes: string;
    
    active: boolean;

    lastChanged: Date;
    displayLastChanged: string;
}