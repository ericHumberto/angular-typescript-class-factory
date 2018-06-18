import { Formatter } from "./formatter.interface";

export class PercentageFormatter implements Formatter {
    constructor() {
        
    }

    format(numberToFormat: number) {
        return numberToFormat + "%"; ;
    }
}