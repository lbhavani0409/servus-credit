
 const {BeforeAll, setDefaultTimeout} = require("cucumber");
 import {Constants} from "./Constants";

 BeforeAll(async function () {
    setDefaultTimeout(new Constants().testScriptWait);
});
