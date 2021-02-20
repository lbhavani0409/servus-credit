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
exports.config = void 0;
const actions_1 = require("./Resources/actions");
const utils = new actions_1.CommonMethods();
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        "chromeOptions": {
            "args": [
                "--disable-infobars"
            ]
        }
    },
    allScriptsTimeout: utils.testScriptWait,
    getPageTimeout: 90000,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        yield utils.openUrl();
    }),
    cucumberOpts: {
        require: ["./Library/*.js", "./StepDefinitions/*.js"],
        tags: "@Regression",
        format: 'json: Reports/results.json',
        strict: true
    },
    specs: [
        "../features/*.feature",
    ],
    plugins: [{
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                displayDuration: true
            }
        }],
};
