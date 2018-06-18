import { Formatter } from "./formatter.interface";
import { StringFormatter } from "./string.formatter";
import { baseModel } from "../model/base.model";
import { Example1 } from "../model/example1.model";
import { Example2 } from "../model/example2.model";
import { PercentageFormatter } from "./percentage.formatter";

export class FormatterFactory {

    static getInstanceByName(name: string, ...args: any[]): Formatter {
        let instance;

        for (let i = 0; i < FormatterConfigurationByName.length; i++) {
            console.log(FormatterConfigurationByName[i].key);
            if (FormatterConfigurationByName[i].key === name) {
                instance = new FormatterConfigurationByName[i].value;
            }
        }

        return instance;
    }

    static getInstanceByModel(model: baseModel, ...args: any[]): Formatter {
        let instance;

        for (let i = 0; i < FormatterConfigurationByModel.length; i++) {
            console.log(FormatterConfigurationByModel[i]);
            if (model instanceof FormatterConfigurationByModel[i].key.type ) {
                instance = new FormatterConfigurationByModel[i].value;
            }
        }

        return instance;
    }
}

export const FormatterConfigurationByName: any = [
    {
        'key': "stringKey",
        'value': StringFormatter
    },
    {
        'key': "percentageKey",
        'value': PercentageFormatter
    }
]

export const FormatterConfigurationByModel: any = [
    {
        'key': { type: Example1 },
        'value': StringFormatter
    },
    {
        'key': { type: Example2 },
        'value': PercentageFormatter
    }
]