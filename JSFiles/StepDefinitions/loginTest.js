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
const cucumber_1 = require("cucumber");
const loginPageObjects_1 = require("../PageObjects/loginPageObjects");
const PropertyFileReader_1 = require("../Resources/PropertyFileReader");
const loginPage = new loginPageObjects_1.LoginPageObject();
const propRead = new PropertyFileReader_1.PropertyFileReader();
const prop = PropertyFileReader_1.PropertyFileReader.getInstance();
const usrName = prop.getPropValue("username");
const passwrd = prop.getPropValue("password");
const chai = require("chai").use(require("chai-as-promised"));
cucumber_1.Given("user navigates to webpage", () => __awaiter(void 0, void 0, void 0, function* () {
    const loginPageHeader = yield loginPage.getTitle();
    yield loginPage.expect(loginPageHeader).to.equal("Home");
}));
cucumber_1.Then('user verifies username input field', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.isEmailAddressTextDisplayed();
}));
cucumber_1.Then('user verifies password input field', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.isPasswordTextDisplayed();
}));
cucumber_1.Then('user verifies login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.isloginBtnDisplayed();
}));
cucumber_1.When("user provides valid credentials, and clicks on Login", () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.successfulLogin(usrName, passwrd);
}));
cucumber_1.Then('user verifies all three values in the listgroup', () => __awaiter(void 0, void 0, void 0, function* () {
    let actualNnumOfListItems = yield loginPage.NumberOfListElements();
    console.log("ListItems:" + actualNnumOfListItems);
    yield loginPage.expect(actualNnumOfListItems).to.equal(3);
}));
cucumber_1.Then('user verifies second list item\'s value is set to {string}', (secondItemValue) => __awaiter(void 0, void 0, void 0, function* () {
    let actualSecondItemValue = yield loginPage.getSecondListItemText();
    yield loginPage.expect(actualSecondItemValue).to.contain(secondItemValue);
}));
cucumber_1.Then('user verifies the second list item\'s badge value is {string}', (secondItemBadgeValue) => __awaiter(void 0, void 0, void 0, function* () {
    let actualSecondItemBadgeValue = yield loginPage.getSecondListItemBadgeText();
    yield loginPage.expect(actualSecondItemBadgeValue).to.equal(secondItemBadgeValue);
}));
cucumber_1.Then('user verifies  {string} is the default selected value in the dropdown', (selectedValue) => __awaiter(void 0, void 0, void 0, function* () {
    let actualSelectedValue = yield loginPage.getSelectedValueText();
    yield loginPage.expect(actualSelectedValue).to.equal(selectedValue);
}));
cucumber_1.Then('user selects {string} from the dropdown', (selectValue) => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.selectValueFromDropdown(selectValue);
}));
cucumber_1.Then('user verifies that the first button is enabled', () => __awaiter(void 0, void 0, void 0, function* () {
    let status = yield loginPage.verifyfirstBtnEnabled();
    yield loginPage.expect(status).to.equal(true);
}));
cucumber_1.Then('user verifies that the second button is disabled', () => __awaiter(void 0, void 0, void 0, function* () {
    let status = yield loginPage.verifysecondBtnEnabled();
    yield loginPage.expect(status).to.equal(false);
}));
cucumber_1.When('user clicks on a button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.clicktestFiveBtn();
}));
cucumber_1.Then('user verifies the success message is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    let actualSuccessMessage = yield loginPage.getsuccessMsgText();
    yield loginPage.expect(actualSuccessMessage).to.equal("You clicked a button!");
}));
cucumber_1.Then('user verified that the button is now disabled', () => __awaiter(void 0, void 0, void 0, function* () {
    let status = yield loginPage.verifytestFiveBtnEnabled();
    yield loginPage.expect(status).to.equal(false);
}));
cucumber_1.Then('verifies that the element in row {string} column {string} is {string}', (row, col, tabValue) => __awaiter(void 0, void 0, void 0, function* () {
    let tableValue = yield loginPage.getTableElements(Number(row) + 1, Number(col) + 1);
    yield loginPage.expect(tableValue).to.equal(tabValue);
}));
