@login
Feature: To validate the Login functionality
Background: 
	Given User must be in the facebook login page
@smoke
 Scenario: User given the invalid username and invalid password
	
		When User given the invalid username and invalid password
		|username|mani|
		|password|456321489|
		|gender|male|
		And User click the login button
		Then User must be redirect to invalid credentials page
	
	Scenario: To Validate the login functionality without entering any credentials
	
		When User click the login button without entering any credentials
		Then User must be redirect to invalid credentials page
		
		
		
		 