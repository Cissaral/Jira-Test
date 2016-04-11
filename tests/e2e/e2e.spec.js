var expect = require('chai').expect;
var util = require('util');

describe('calculator', function() {

	// load the site landing page before each test, to get a clean start
	//beforeEach(module('calculator'));
	beforeEach(function() {
		browser.get('/');
		browser.driver.manage().window().setSize(800, 600);
	});

	it('All fields are shown', function () {

		// check if all fields are shown
		element(by.id('input1')).isDisplayed().then(function(isVisible) {
			expect(isVisible).to.equal(true);
		});

		element(by.id('input2')).isDisplayed().then(function(isVisible) {
			expect(isVisible).to.equal(true);
		});

		element(by.id('arithmetic')).isDisplayed().then(function(isVisible) {
			expect(isVisible).to.equal(true);
		});

		element(by.id('submitBtn')).isDisplayed().then(function(isVisible) {
			expect(isVisible).to.equal(true);
		});
	});

	it('should show result', function () {
		// check if a calculation cane be done

		element(by.id('input1')).sendKeys('2');
		element(by.id('arithmetic')).click('+');
		element(by.id('input2')).sendKeys('1');

		element(by.id('submitBtn')).click();

		element(by.id('result')).isDisplayed().then(function(isVisible) {
			expect(isVisible).to.equal(true);
		});

	});

	it('should show error messages for every field if input is invalid', function() {
		// fill all fields with invalid inputs
		element(by.id('input1')).sendKeys('max');
		//element(by.id('input1')).sendKeys('max');
		element(by.id('input2')).sendKeys('Max8');

		element(by.id('invalidInput')).isDisplayed().then(function(isVisible) {
			expect(isVisible).to.equal(true);
		});
		browser.sleep(3000);
	});

	it('should show error messages if calculation is invalid', function() {
		// fill all fields with invalid inputs
		element(by.id('input1')).sendKeys('1');
		element(by.id('input2')).sendKeys('0');

		element(by.id('invalidInput')).isDisplayed().then(function(isVisible) {
			expect(isVisible).to.equal(true);
		});
		browser.sleep(3000);
	});

});
