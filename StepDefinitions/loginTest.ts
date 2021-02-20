
import { Given, When, Then } from "cucumber";
import { LoginPageObject } from "../PageObjects/loginPageObjects";
import { PropertyFileReader } from "../Resources/PropertyFileReader";
import { CommonMethods } from "../Resources/actions";
import { browser } from "protractor";

const loginPage: LoginPageObject = new LoginPageObject();
const propRead: PropertyFileReader = new PropertyFileReader();
const prop: any = PropertyFileReader.getInstance();
const usrName: string = prop.getPropValue("username");
const passwrd: string = prop.getPropValue("password");
const chai: any = require("chai").use(require("chai-as-promised"));

Given("user navigates to webpage", async () => {
    const loginPageHeader: string = await loginPage.getTitle();
    await loginPage.expect(loginPageHeader).to.equal("Home");
    });

Then('user verifies username input field', async () => {
    await loginPage.isEmailAddressTextDisplayed();
});


Then('user verifies password input field', async () => {
    await loginPage.isPasswordTextDisplayed();
});

Then('user verifies login button', async () => {
    await loginPage.isloginBtnDisplayed();
});

When("user provides valid credentials, and clicks on Login", async () => {
    await loginPage.successfulLogin(usrName, passwrd);
})

Then('user verifies all three values in the listgroup', async () => {
    let actualNnumOfListItems: number = await loginPage.NumberOfListElements();
    console.log("ListItems:" + actualNnumOfListItems)
    await loginPage.expect(actualNnumOfListItems).to.equal(3);
});

Then('user verifies second list item\'s value is set to {string}', async (secondItemValue: string) => {
    let actualSecondItemValue: string = await loginPage.getSecondListItemText();
    await loginPage.expect(actualSecondItemValue).to.contain(secondItemValue);
});

Then('user verifies the second list item\'s badge value is {string}', async (secondItemBadgeValue: string) => {
    let actualSecondItemBadgeValue: string = await loginPage.getSecondListItemBadgeText();
    await loginPage.expect(actualSecondItemBadgeValue).to.equal(secondItemBadgeValue);
});

Then('user verifies  {string} is the default selected value in the dropdown', async (selectedValue: string) => {
    let actualSelectedValue: string = await loginPage.getSelectedValueText();
    await loginPage.expect(actualSelectedValue).to.equal(selectedValue);
});

Then('user selects {string} from the dropdown', async (selectValue: string) => {
    await loginPage.selectValueFromDropdown(selectValue);
});

Then('user verifies that the first button is enabled', async () => {
    let status: boolean = await loginPage.verifyfirstBtnEnabled();
    await loginPage.expect(status).to.equal(true);
});

Then('user verifies that the second button is disabled', async () => {
    let status: boolean = await loginPage.verifysecondBtnEnabled();
    await loginPage.expect(status).to.equal(false);
});

When('user clicks on a button', async () => {
    await loginPage.clicktestFiveBtn();
});

Then('user verifies the success message is displayed', async () => {
    let actualSuccessMessage: string = await loginPage.getsuccessMsgText();
    await loginPage.expect(actualSuccessMessage).to.equal("You clicked a button!");
});

Then('user verified that the button is now disabled', async () => {
    let status: boolean = await loginPage.verifytestFiveBtnEnabled();
    await loginPage.expect(status).to.equal(false);
});

Then('verifies that the element in row {string} column {string} is {string}', async (row:string, col:string, tabValue:string)=> {
    let tableValue=await loginPage.getTableElements(Number(row)+1, Number(col)+1);
    await loginPage.expect(tableValue).to.equal(tabValue);
  });



