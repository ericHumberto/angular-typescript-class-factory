import { Formatter } from "./formatter.interface";

export class StringFormatter implements Formatter {
    constructor() {
        
    }

    format(stringToFormat: string) {
        return "String Format: " + stringToFormat;
    }
}