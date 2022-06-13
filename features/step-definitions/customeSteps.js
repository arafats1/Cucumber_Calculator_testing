const { When,Then, After, Before } = require("@cucumber/cucumber");
const { expect } = require("chai");
let product = 0;

Before(function () {
    console.log('Inside Before');
  });

After(function () {
    console.log('Inside After');
  });

When('I multiply {int} and {int}', function (int1, int2) {
    product = int1 * int2;
}
);

Then('the result should be {int}', function (result) {
   expect(product).to.equal(result);

}
);

