exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['tests/e2e.spec.js'],
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
