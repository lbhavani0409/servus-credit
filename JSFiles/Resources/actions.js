"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMethods = void 0;
const protractor_1 = require("protractor");
const Constants_1 = require("./Constants");
const PropertyFileReader_1 = require("./PropertyFileReader");
const propRead = new PropertyFileReader_1.PropertyFileReader();
const prop = PropertyFileReader_1.PropertyFileReader.getInstance();
class CommonMethods extends Constants_1.Constants {
    constructor() {
        super(...arguments);
        this.getTitle = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(2000);
            return protractor_1.browser.driver.getTitle().then((text) => {
                return text;
            });
        });
        this.waitUntilReady = (element, elementWaitType) => __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            const _retryOnErr = () => {
                return false;
            };
            switch (elementWaitType) {
                case "present":
                    return protractor_1.browser.driver.wait(() => {
                        return element.isPresent().then((isPresent) => {
                            if (isPresent) {
                                return true;
                            }
                            else {
                                return _retryOnErr();
                            }
                        }, _retryOnErr());
                    }, this.elementToWait).then((waitRetValue) => {
                        return waitRetValue;
                    }, (err) => {
                        const desc = "Element '" + element.locator() + "' Not Present. ";
                    });
                case "display":
                    return protractor_1.browser.driver.wait(() => {
                        return element.isDisplayed().then((isDisplayed) => {
                            if (isDisplayed) {
                                return true;
                            }
                            if (!isDisplayed) {
                            }
                        }, _retryOnErr());
                    }, this.elementToWait).then((waitRetValue) => {
                        return waitRetValue;
                    }, (err) => __awaiter(this, void 0, void 0, function* () {
                        const desc = "Element --'" + element.locator() + "' Not Displayed. ";
                        this.expect.fail(0, 1, err.message);
                    }));
                default:
                    break;
            }
        });
        this.click = (locator, elementWaitType) => __awaiter(this, void 0, void 0, function* () {
            if (yield this.waitUntilReady(locator, elementWaitType)) {
                return locator.click().then(() => {
                    return true;
                }, (err) => {
                    return false;
                });
            }
        });
        this.type = (locator, value, elementWaitType) => __awaiter(this, void 0, void 0, function* () {
            if (yield this.waitUntilReady(locator, elementWaitType)) {
                protractor_1.browser.driver.sleep(500);
                return locator.sendKeys(value.trim().toString()).then(() => {
                    return true;
                }, (err) => {
                    return false;
                });
            }
        });
        this.clear = (locator, elementWaitType) => __awaiter(this, void 0, void 0, function* () {
            if (yield this.waitUntilReady(locator, elementWaitType)) {
                return locator.clear().then(() => {
                    return true;
                }, (err) => {
                    return false;
                });
            }
        });
        this.openUrl = () => __awaiter(this, void 0, void 0, function* () {
            const baseUrl = prop.getPropValue("BaseURL");
            protractor_1.browser.driver.manage().window().maximize();
            yield protractor_1.browser.waitForAngularEnabled(true);
            protractor_1.browser.ignoreSynchronization = true;
            protractor_1.browser.sleep(500);
            protractor_1.browser.resetUrl = 'file:///';
            yield protractor_1.browser.get("file:///" + baseUrl);
        });
        this.getText = (locator, elementWaitType) => __awaiter(this, void 0, void 0, function* () {
            yield this.waitUntilReady(locator, elementWaitType);
            return locator.getText().then((text) => {
                return text.toString().trim();
            }, (err) => {
                this.expect.fail(0, 1, err.message);
                return undefined;
            });
        });
    }
}
exports.CommonMethods = CommonMethods;
