Feature: login feauture

Scenario:  Verify user can log in by entering valid email
    When user enters email address
    And user clicks "SIGN IN" button
    And user enter password
    And user clicks sign button
    Then user should login successfully

Scenario: login with unregistered email
    When user inputs invalid email
    Then Message "Email address not found." appears

Scenario: Can't login using incorrect password
    Given user enters email address
    And user clicks "SIGN IN" button
    When user inputs incorrect password
    And user clicks "SIGN IN" button
    Then Invalid email or password displayed



Scenario: User can't login w/out entering an email address
    Given user is in login page
    When user clicks "SIGN IN" button
    Then Message "Email is required.." appears



Scenario: Can't login w/out entering an OTP code
    Given user is in login-code page
    When user clicks "SIGN IN" button
    Then Message "Code is required." appears



    
Scenario: User logs out sucessfully
    Given user is in dashboard page
    And user clicks user name
    When user choose logs out
    Then user should be logs out successfully