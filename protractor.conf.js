exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['tests/e2e/e2e.spec.js'],

   baseUrl: 'file:///home/clarissa/Projekt_SER/Jira-Test/index.html#',

  onPrepare: function() {

           // By default, Protractor use data:text/html,<html></html> as resetUrl, but
           // location.replace from the data: to the file: protocol is not allowed
           // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
           // with the file: protocol (this particular one will open system's root folder)
           browser.resetUrl = 'file://';
  },

  // Alternatively, suites may be used. When run without a command line
  // parameter, all suites will run. If run with --suite=smoke or
  // --suite=smoke,full only the patterns matched by the specified suites will
  // run.
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    enableTimeouts: false
  }
};
