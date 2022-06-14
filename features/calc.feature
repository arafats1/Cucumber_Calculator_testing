Feature: Calculator


     Scenario: Multiply two numbers
     Given I have entered 50 into the calculator to add
        And I have entered 70 into the calculator
        When I press 50 * 70 on the calculator
        Then the result should be 3500 on the screen
        

    Scenario: Add two numbers
        Given I have entered 10 into the calculator
        And I have also entered 20 into the calculator
        When I press 10 + 20 on the calculator
        Then The result should be 30 on the screen
    
        
    Scenario: Subtract two numbers
        Given I have entered 10 into the calculator to subtract
        And I have also entered 20 into the calculator
        When I press 20 - 10 on the calculator
        Then The result should be 10 on the screen after subtracting


    Scenario: Divide two numbers
        Given I have entered 10 into the calculator to get average
        And I have also entered 20 into the calculator to divide
        When I press 20 divide 10 on the calculator
        Then The result should be 2 on the screen after dividing