import { browser, by, element, ElementArrayFinder, ElementFinder, protractor } from "protractor";
import { Constants } from "./Constants";
import { PropertyFileReader } from "./PropertyFileReader";

const propRead: PropertyFileReader = new PropertyFileReader();
const prop: any = PropertyFileReader.getInstance();

export class CommonMethods extends Constants {


  public getTitle = async () => {
    await browser.sleep(2000);
    return browser.driver.getTitle().then((text: string) => {
      return text;
    });
  };


  public waitUntilReady = async (element: ElementFinder, elementWaitType: string) => {
    const EC: any = protractor.ExpectedConditions;

    const _retryOnErr: any = () => {
           return false;
    };

    switch (elementWaitType) {
      case "present":
        return browser.driver.wait(() => {
          return element.isPresent().then((isPresent: boolean) => {
            if (isPresent) {
              return true;
            } else {
              return _retryOnErr();
            }
          }, _retryOnErr());
        }, this.elementToWait).then((waitRetValue: any) => {
          return waitRetValue; // usually just `true`
        }, (err: Error) => {
          const desc: string = "Element '" + element.locator() + "' Not Present. ";
                  });

      case "display":
        return browser.driver.wait(() => {
          return element.isDisplayed().then((isDisplayed: boolean) => {
            if (isDisplayed) {
              return true;
            }
            if (!isDisplayed) {
              // return false;
            }
          }, _retryOnErr());
        }, this.elementToWait).then((waitRetValue: any) => {
          return waitRetValue; // usually just `true`
        }, async (err: Error) => {
          const desc: string = "Element --'" + element.locator() + "' Not Displayed. ";
          this.expect.fail(0, 1, err.message);
        });
      default:
        break;
    }
  };

  public click = async (locator: ElementFinder, elementWaitType: string) => {
    if (await this.waitUntilReady(locator, elementWaitType)) {
      return locator.click().then(() => {
        return true;
      }, (err: Error) => {
        return false;
      });
    }


  };

  public type = async (locator: ElementFinder, value: any, elementWaitType: string) => {
    if (await this.waitUntilReady(locator, elementWaitType)) {
      browser.driver.sleep(500);
      return locator.sendKeys(value.trim().toString()).then(() => {
        return true;
      }, (err: Error) => {
        return false;
      });
    }
  };

  public clear = async (locator: ElementFinder, elementWaitType: string) => {
    if (await this.waitUntilReady(locator, elementWaitType)) {
      return locator.clear().then(() => {
        return true;
      }, (err: Error) => {
        return false;
      });
    }
  };

  public openUrl = async () => {
    const baseUrl: string = prop.getPropValue("BaseURL");
    browser.driver.manage().window().maximize();
    await browser.waitForAngularEnabled(true);
    browser.ignoreSynchronization = true;
    browser.sleep(500); 
    browser.resetUrl = 'file:///';
    await browser.get("file:///"+baseUrl);      
  };

   public getText = async (locator: ElementFinder, elementWaitType: string) => {
    await this.waitUntilReady(locator, elementWaitType);
    return locator.getText().then((text: string) => {
      return text.toString().trim();
    }, (err: Error) => {
      this.expect.fail(0, 1, err.message);
      return undefined;
    });
  };

}