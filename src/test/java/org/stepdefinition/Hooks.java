package org.stepdefinition;

import io.cucumber.java.After;
import io.cucumber.java.Before;



public class Hooks {
	@Before
	private void beforeScenario() {
		System.out.println("Scenario Started");
	}
	
	@After
	private void afterScenario() {
		System.out.println("Scenario Ended");
	}

}
