delete process.env.ELECTRON_RUN_AS_NODE;

module.exports = function () {
  return {
    files: [
      'lib/**/*.js'
    ],

    tests: [
      'test/**/*Spec.js'
    ],

    testFramework: 'mocha',

    setup: function (wallaby) {
      wallaby.testFramework.timeout(15000);
    },

    env: {
      type: 'node'
    }
  }
};