package org.stepdefinition;





import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FbLoginStep {
	
	public  WebDriver driver;
	
	@Given("User must be in the facebook login page")
	public void user_must_be_in_the_facebook_login_page() {
		WebDriverManager.chromedriver().setup();
		 driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
	
	
	}

	

	@When("User click the login button")
	public void user_click_the_login_button() {
		WebElement login = driver.findElement(By.name("login"));
		login.click();
		
	}

	
	
	@Then("User must be redirect to invalid credentials page")
	public void user_must_be_redirect_to_invalid_credentials_page() {
	    String url = driver.getCurrentUrl();
	    Assert.assertTrue("Please check", url.contains("privacy_mutation_token"));
	}

	@When("User click the login button without entering any credentials")
	public void user_click_the_login_button_without_entering_any_credentials() throws InterruptedException {
	    WebElement btnLogin = driver.findElement(By.name("login"));
	    btnLogin.click();
	    Thread.sleep(3000);
	}

	@Given("User must be in facebook login page")
	public void user_must_be_in_facebook_login_page() {
		WebDriverManager.chromedriver().setup();
		 driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
	
	
	}
	
	@Given("user click the forget password link")
	public void user_click_the_forget_password_link() throws InterruptedException {
		WebElement linkforget = driver.findElement(By.xpath("//a[text()='Forgotten password?']"));
		linkforget.click();
		Thread.sleep(3000);    
	}

	@When("user give invalid mobile number")
	public void user_give_invalid_mobile_number() {
		WebElement txtphone = driver.findElement(By.xpath("(//input[@name='email'])[2]"));
		txtphone.sendKeys("4563217981");
	   
	}
	
	
	@When("click the search button")
	public void click_the_search_button() throws InterruptedException {
		WebElement btnSearch = driver.findElement(By.xpath("//button[@type='submit']"));
	    btnSearch.click();
	    Thread.sleep(5000);
	}

	//@Then("user get the error message")
	//public void user_get_the_error_message() {
		// String url = driver.getCurrentUrl();
		  //  Assert.assertTrue("Please check", url.contains("www.facebook.com/recover/initiate/?"));
		//WebElement errorEle = driver.findElement(By.xpath("//div[text()='Your search did not return any results. Please try again with other information.']"));
		//String errormsg = errorEle.getText();
		//Assert.assertTrue("Please check", errormsg.contains("search did not return any results"));
	    
	//}
	
	@When("user give invalid mobile number {string}")
	public void user_give_invalid_mobile_number(String mobilenumber) throws InterruptedException {
	 WebElement txtPhone = driver.findElement(By.name("email"));
	 txtPhone.sendKeys(mobilenumber);
	 
	 Thread.sleep(6000);
	}

	@When("User given the invalid username and invalid password")
	public void user_given_the_invalid_username_and_invalid_password(io.cucumber.datatable.DataTable d) {
		Map<Object, Object> map = d.asMap(String.class, String.class);
		Object username = map.get("username");
		String st = (String)username;
		
		Object password = map.get("password");
		String st1 = (String)password;
		
		
		WebElement txtemail = driver.findElement(By.id("email"));
		txtemail.sendKeys(st);
		
		WebElement txtpass = driver.findElement(By.id("pass"));
		txtpass.sendKeys(st1);
		
		
	}


}
