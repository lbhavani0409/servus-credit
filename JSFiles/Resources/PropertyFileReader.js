"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyFileReader = void 0;
const util_1 = require("util");
const propertiesReader = require("properties-reader");
let propFile = "";
class PropertyFileReader {
    constructor() {
        this.setPropertyFile = (fileName) => {
            propFile = propertiesReader(fileName);
        };
        this.getPropValue = (propName) => {
            let propValue;
            try {
                if (!util_1.isNullOrUndefined(propName)) {
                    propValue = propFile.get(propName);
                }
                else {
                    console.error("Please provide valid property name.");
                }
                return propValue;
            }
            catch (e) {
                console.error("error is :" + e.stack);
            }
        };
    }
}
exports.PropertyFileReader = PropertyFileReader;
PropertyFileReader.getInstance = () => {
    if (!PropertyFileReader.pfReader) {
        PropertyFileReader.pfReader = new PropertyFileReader();
    }
    return PropertyFileReader.pfReader;
};
