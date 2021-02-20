"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Test sutie', () => {
    it('first', () => {
        console.log('testing its working or not');
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://google.com');
    });
});
