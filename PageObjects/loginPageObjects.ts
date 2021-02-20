import { browser, ElementFinder, element, by, ElementArrayFinder } from 'protractor';
import { CommonMethods } from "../Resources/Actions";

export class LoginPageObject extends CommonMethods {

    emailAddressInputBox: ElementFinder = element(by.css("#inputEmail"));
    passwordInputBox: ElementFinder = element(by.css("#inputPassword"));
    loginBtn: ElementFinder = element(by.css("button.btn.btn-lg.btn-primary.btn-block"));
    listGrpElements: ElementArrayFinder = element.all(by.xpath("//div[@id='test-2-div']/ul/li"));
    secondListedItemLabel: ElementFinder = element(by.xpath("(//div[@id='test-2-div']/ul/li[@class='list-group-item justify-content-between'])[2]"));
    secondListItem_BadgeLabel: ElementFinder = element(by.xpath("( //div[@id='test-2-div']/ul/li//span)[2]"));
    drpDownValue: ElementFinder = element(by.css("#dropdownMenuButton"));
    selectDropDownValue: ElementFinder = element(by.linkText("Option 3"));
    firstBtn: ElementFinder = element(by.xpath("(//*[@class='btn btn-lg btn-primary'])[1]"));
    secondBtn: ElementFinder = element(by.xpath("(//*[@class='btn btn-lg btn-secondary'])[1]"));
    testFiveBtn: ElementFinder = element(by.css("button#test5-button"));  
    successMsg: ElementFinder = element(by.css("div#test5-alert"));  
    tableElement: ElementFinder;

    public successfulLogin = async (usrName: string, passWrd: string) => {
        await this.type(this.emailAddressInputBox, usrName, this.ElementWaitType.ISDISPLAYED);
        await this.type(this.passwordInputBox, passWrd, this.ElementWaitType.ISDISPLAYED);
        await this.click(this.loginBtn, this.ElementWaitType.ISDISPLAYED);
    }

    public isEmailAddressTextDisplayed = async () => {
        return await this.waitUntilReady(this.emailAddressInputBox, this.ElementWaitType.ISDISPLAYED)
    }

    public isPasswordTextDisplayed = async () => {
        return await this.waitUntilReady(this.passwordInputBox, this.ElementWaitType.ISDISPLAYED)
    }

    public isloginBtnDisplayed = async () => {
        return await this.waitUntilReady(this.loginBtn, this.ElementWaitType.ISDISPLAYED)
    }

    public NumberOfListElements = async () => {
        return (await this.listGrpElements).length;
    }

    public getSecondListItemText = async () => {
        return await this.getText(this.secondListedItemLabel, this.ElementWaitType.ISDISPLAYED);
    }

    public getSecondListItemBadgeText = async () => {
        return await this.getText(this.secondListItem_BadgeLabel, this.ElementWaitType.ISDISPLAYED);
    }


    public getSelectedValueText = async () => {
        return await this.getText(this.drpDownValue, this.ElementWaitType.ISDISPLAYED);
    }

    public selectValueFromDropdown = async (drpdownvalue: string) => {
        await this.click(this.drpDownValue, this.ElementWaitType.ISDISPLAYED);
        await this.click(this.selectDropDownValue, this.ElementWaitType.ISDISPLAYED);
        return true;
    }

    
    public verifyfirstBtnEnabled = async () => {
        return await this.firstBtn.isEnabled();     
    }

    public verifysecondBtnEnabled = async () => {
        return await this.secondBtn.isEnabled();       
    }

    public clicktestFiveBtn = async () => {
        await this.waitUntilReady(this.testFiveBtn, this.ElementWaitType.ISDISPLAYED)
        await this.click(this.testFiveBtn, this.ElementWaitType.ISDISPLAYED);           
    }

    public verifytestFiveBtnEnabled = async () => {
        return await this.testFiveBtn.isEnabled();       
    }

    public getsuccessMsgText = async () => {
        return await this.getText(this.successMsg, this.ElementWaitType.ISDISPLAYED);
    }

    public getTableElements = async (row: number, col: number) => {      
        this.tableElement= element(by.xpath("//tbody//tr["+row+"]//td["+col+"]"));  
        return await this.getText(this.tableElement, this.ElementWaitType.ISDISPLAYED);
    }

}

