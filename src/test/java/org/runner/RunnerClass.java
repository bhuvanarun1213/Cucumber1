package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utility.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",glue="org.stepdefinition",dryRun=false,
plugin= {"pretty","html:target\\reports\\html\\fbhtml","junit:target\\reports\\jUnit\\fbjunit.xml",
		"json:target\\reports\\json\\fb.json"},monochrome=true)
public class RunnerClass {
	
	@AfterClass
	public static void jvmReportGeneration() {
JvmReport.generateJvmReport(System.getProperty("user.dir")+"\\target\\reports\\json\\fb.json");
	}

}
