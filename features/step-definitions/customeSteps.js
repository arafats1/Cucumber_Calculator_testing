const {When,Then, After, Before } = require("@cucumber/cucumber");
const { expect } = require("chai");
let product = 0;
let sum = 0;
let average = 0;
let difference = 0;

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

Then('the result1 should be {int}', function (result1) {
   expect(product).to.equal(result1);

}
);

When ('I divide {int} by {int}', function (int1, int2) {
    average = int1 / int2;
}
);

Then('the result2 should be {int}', function (result2) {
    expect(average).to.equal(result2);
}
);

When ('I add {int} and {int}', function (int1, int2) {
    sum = int1 + int2;
}
);

Then('the result3 should be {int}', function (result3) {
    expect(sum).to.equal(result3);
}
);

When ('I subtract {int} from {int}', function (int1, int2) {
    difference = int2 - int1;
}
);

Then('the result4 should be {int}', function (result4) {
    expect(difference).to.equal(result4);
}
);