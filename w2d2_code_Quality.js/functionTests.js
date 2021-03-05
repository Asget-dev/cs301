//functionTests.js
"use strict";
const assert = require("assert");
/* import all exports from functions.js as methods on an object named fun */
const fun = require("./functions.js");
/* returns true if argument is prime number */



describe("checkPrime", function () {
  it("37 is prime", function () {
    assert.strictEqual(fun.checkPrime(37), true);
  });
  it(" 77 is not prime", function () {
    assert.strictEqual(fun.checkPrime(77), false);
  });
});