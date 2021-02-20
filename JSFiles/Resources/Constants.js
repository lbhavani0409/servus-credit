"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
const PropertyFileReader_1 = require("./PropertyFileReader");
const chai = require("chai").use(require("chai-as-promised"));
class Constants {
    constructor() {
        this.prop = consts.prop;
        this.expect = consts.expect;
        this.testScriptWait = consts.testScriptWait;
        this.ElementWaitType = consts.ElementWaitType;
        this.elementToWait = consts.elementToWait;
    }
}
exports.Constants = Constants;
var consts;
(function (consts) {
    consts.logLevel = "DEBUG";
    consts.prop = PropertyFileReader_1.PropertyFileReader.getInstance();
    consts.expect = chai.expect;
    consts.prop.setPropertyFile("Resources/Config.properties");
    consts.elementToWait = 30000;
    consts.testScriptWait = 120000;
    let ElementWaitType;
    (function (ElementWaitType) {
        ElementWaitType["ISPRESENT"] = "present";
        ElementWaitType["ISDISPLAYED"] = "display";
    })(ElementWaitType = consts.ElementWaitType || (consts.ElementWaitType = {}));
    ;
})(consts || (consts = {}));
