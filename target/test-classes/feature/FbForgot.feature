@forget
Feature: To Validate the forgot password functionality


@smoke
Scenario Outline: To Validate the searching account using invalid mobile number

Given User must be in facebook login page
And user click the forget password link
When user give invalid mobile number "<mobile number>"
And click the search button
#Then user get the error message

Examples:
	|mobile number|
	|4563217890|
	|7896441236|

