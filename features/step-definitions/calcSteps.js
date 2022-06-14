
const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('chai');


//Multiplying
Given('I have entered the {} into the calculator', function (int1) {
    console.log(int1);    
}
);

Given('I have entered {} into the calculator', function (int2) {
    console.log(int2);    
}
);

When('I press {} * {} on the calculator', function (int1, int2) {
    product = int1 * int2;
}
);

Then('the result should be {int} on the screen', function (result) {
    expect(product).to.equal(result);
}
);



//Adding
Given('I have entered {int} into the calculator to add', function (int1) {
    console.log(int1);
    }
);

Given('I have also entered {int} into the calculator', function (int2) {
    console.log(int2);   
}
);

When('I press {int} + {int} on the calculator', function (int1, int2) {
    sum = int1 + int2;
}
);

Then('The result should be {int} on the screen', function (result) {
    expect(sum).to.equal(result);
}   
);


// //Subtracting
 Given('I have entered {int} into the calculator to subtract', function (int1) {
    console.log(int1);   
}
);

    Given('I have also entered second {int} into the calculator', function (int2) {
        console.log(int2);   
    }
    );

    When('I press {int} - {int} on the calculator', function (int2, int1) {
        difference = int2 - int1;
    }
    );

    Then('The result should be {int} on the screen after subtracting', function (result) {
        expect(difference).to.equal(result);
    }
    );


    // //Average
    Given('I have entered {int} into the calculator to get average', function (int1) {
        console.log(int1);    
    }
    );

        Given('I have also entered {int} into the calculator to divide', function (int2) {
            console.log(int2);    
        }
        );

        When('I press {int} divide {int} on the calculator', function (int1, int2) {
            average = int1 / int2;
        }
        );

        Then('The result should be {int} on the screen after dividing', function (result) {
            expect(average).to.equal(result);
        }
        );

