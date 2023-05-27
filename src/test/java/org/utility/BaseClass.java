package org.utility;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	static WebDriver driver;
	
	public static void browserlaunch() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}
	public static void launchUrl(String url) {
		driver.get(url);
		
	}
	public static void maxwindow() {
		driver.manage().window().maximize();
	}
	
	public static String pageTitle() {
		String title = pageTitle();
		return title;
		
		
		
	}
	public static String pageUrl() {
		String url = driver.getCurrentUrl();
		return url;
		
	}
	
	public static void closeBrowser() {
		 driver.close();

	}
	
	public static void fillTheTextBox(WebElement ele, String value) {
		ele.sendKeys(value);

	}
	public static void btnClick(WebElement ele) {

		ele.click();
	}

}
