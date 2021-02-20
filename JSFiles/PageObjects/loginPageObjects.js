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
exports.LoginPageObject = void 0;
const protractor_1 = require("protractor");
const Actions_1 = require("../Resources/Actions");
class LoginPageObject extends Actions_1.CommonMethods {
    constructor() {
        super(...arguments);
        this.emailAddressInputBox = protractor_1.element(protractor_1.by.css("#inputEmail"));
        this.passwordInputBox = protractor_1.element(protractor_1.by.css("#inputPassword"));
        this.loginBtn = protractor_1.element(protractor_1.by.css("button.btn.btn-lg.btn-primary.btn-block"));
        this.listGrpElements = protractor_1.element.all(protractor_1.by.xpath("//div[@id='test-2-div']/ul/li"));
        this.secondListedItemLabel = protractor_1.element(protractor_1.by.xpath("(//div[@id='test-2-div']/ul/li[@class='list-group-item justify-content-between'])[2]"));
        this.secondListItem_BadgeLabel = protractor_1.element(protractor_1.by.xpath("( //div[@id='test-2-div']/ul/li//span)[2]"));
        this.drpDownValue = protractor_1.element(protractor_1.by.css("#dropdownMenuButton"));
        this.selectDropDownValue = protractor_1.element(protractor_1.by.linkText("Option 3"));
        this.firstBtn = protractor_1.element(protractor_1.by.xpath("(//*[@class='btn btn-lg btn-primary'])[1]"));
        this.secondBtn = protractor_1.element(protractor_1.by.xpath("(//*[@class='btn btn-lg btn-secondary'])[1]"));
        this.testFiveBtn = protractor_1.element(protractor_1.by.css("button#test5-button"));
        this.successMsg = protractor_1.element(protractor_1.by.css("div#test5-alert"));
        this.successfulLogin = (usrName, passWrd) => __awaiter(this, void 0, void 0, function* () {
            yield this.type(this.emailAddressInputBox, usrName, this.ElementWaitType.ISDISPLAYED);
            yield this.type(this.passwordInputBox, passWrd, this.ElementWaitType.ISDISPLAYED);
            yield this.click(this.loginBtn, this.ElementWaitType.ISDISPLAYED);
        });
        this.isEmailAddressTextDisplayed = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.waitUntilReady(this.emailAddressInputBox, this.ElementWaitType.ISDISPLAYED);
        });
        this.isPasswordTextDisplayed = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.waitUntilReady(this.passwordInputBox, this.ElementWaitType.ISDISPLAYED);
        });
        this.isloginBtnDisplayed = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.waitUntilReady(this.loginBtn, this.ElementWaitType.ISDISPLAYED);
        });
        this.NumberOfListElements = () => __awaiter(this, void 0, void 0, function* () {
            return (yield this.listGrpElements).length;
        });
        this.getSecondListItemText = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.getText(this.secondListedItemLabel, this.ElementWaitType.ISDISPLAYED);
        });
        this.getSecondListItemBadgeText = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.getText(this.secondListItem_BadgeLabel, this.ElementWaitType.ISDISPLAYED);
        });
        this.getSelectedValueText = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.getText(this.drpDownValue, this.ElementWaitType.ISDISPLAYED);
        });
        this.selectValueFromDropdown = (drpdownvalue) => __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.drpDownValue, this.ElementWaitType.ISDISPLAYED);
            yield this.click(this.selectDropDownValue, this.ElementWaitType.ISDISPLAYED);
            return true;
        });
        this.verifyfirstBtnEnabled = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.firstBtn.isEnabled();
        });
        this.verifysecondBtnEnabled = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.secondBtn.isEnabled();
        });
        this.clicktestFiveBtn = () => __awaiter(this, void 0, void 0, function* () {
            yield this.waitUntilReady(this.testFiveBtn, this.ElementWaitType.ISDISPLAYED);
            yield this.click(this.testFiveBtn, this.ElementWaitType.ISDISPLAYED);
        });
        this.verifytestFiveBtnEnabled = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.testFiveBtn.isEnabled();
        });
        this.getsuccessMsgText = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.getText(this.successMsg, this.ElementWaitType.ISDISPLAYED);
        });
        this.getTableElements = (row, col) => __awaiter(this, void 0, void 0, function* () {
            this.tableElement = protractor_1.element(protractor_1.by.xpath("//tbody//tr[" + row + "]//td[" + col + "]"));
            return yield this.getText(this.tableElement, this.ElementWaitType.ISDISPLAYED);
        });
    }
}
exports.LoginPageObject = LoginPageObject;
