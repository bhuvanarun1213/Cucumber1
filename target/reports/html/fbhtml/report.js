$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/FbForgot.feature");
formatter.feature({
  "name": "To Validate the forgot password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@forget"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To Validate the searching account using invalid mobile number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user click the forget password link",
  "keyword": "And "
});
formatter.step({
  "name": "user give invalid mobile number \"\u003cmobile number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click the search button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mobile number"
      ]
    },
    {
      "cells": [
        "4563217890"
      ]
    },
    {
      "cells": [
        "7896441236"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Validate the searching account using invalid mobile number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@forget"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginStep.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the forget password link",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginStep.user_click_the_forget_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user give invalid mobile number \"4563217890\"",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginStep.user_give_invalid_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginStep.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the searching account using invalid mobile number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@forget"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginStep.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the forget password link",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginStep.user_click_the_forget_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user give invalid mobile number \"7896441236\"",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginStep.user_give_invalid_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginStep.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/FbLogin.feature");
formatter.feature({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User must be in the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginStep.user_must_be_in_the_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User given the invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User given the invalid username and invalid password",
  "rows": [
    {
      "cells": [
        "username",
        "mani"
      ]
    },
    {
      "cells": [
        "password",
        "456321489"
      ]
    },
    {
      "cells": [
        "gender",
        "male"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginStep.user_given_the_invalid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginStep.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be redirect to invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLoginStep.user_must_be_redirect_to_invalid_credentials_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Please check\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.stepdefinition.FbLoginStep.user_must_be_redirect_to_invalid_credentials_page(FbLoginStep.java:48)\r\n\tat ✽.User must be redirect to invalid credentials page(file:src/test/resources/feature/FbLogin.feature:13)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User must be in the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginStep.user_must_be_in_the_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the login functionality without entering any credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User click the login button without entering any credentials",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginStep.user_click_the_login_button_without_entering_any_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be redirect to invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLoginStep.user_must_be_redirect_to_invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
});