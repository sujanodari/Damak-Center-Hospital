module.exports = function () {
    this.Given(/^I am on the DCH Login page$/, function () {

        // load panchasil
        return helpers.loadPage(page.login.url);
    });
    this.When(/^I enter "([^"]*)" and I enter "([^"]*)" and I click login$/, function (userEmail,userPassword) {

   
        return page.login.userInput(userEmail,userPassword);
    });
    this.Then(/^I should see "([^"]*)" in the results$/, function (expectedText) {
        return helpers.loadPage(page.login.url);
     });
   
     
};
