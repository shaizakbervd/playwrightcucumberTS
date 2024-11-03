import { Reporter } from '@playwright/test/reporter';

// var jira = require("@test/integrations/src/integrations/jira");
//var testRail = require("@test/integrations/src/integrations/testRail");
const { config } = require("@test/integrations/src/constants/config");

//import jira from '@test/integrations/src/integrations/jira'

class MyReporter implements Reporter {

  onBegin(config, suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test) {
    console.log(`Starting test ${test.title}`);
  }

  async onTestEnd(test, result) {
    //`${result.status}` == 'failed' || 
    console.log(`Finished test ${test.title}: ${result.status}`);
    
  }

   async onEnd(result) {
    console.log(`Finished the run: ${result.status}`);
    if (`${result.status}` == 'timedOut'){
      console.log(`I am in if of test end`);
    //  await jira.createIssueForWdio("Frametets", `${result.status}`);

      }
  }
}
export default MyReporter;