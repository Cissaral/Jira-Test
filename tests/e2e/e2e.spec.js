describe('calculator', function() { 

// load the site landing page before each test, to get a clean start
beforeEach(module('calculator')); 
beforeEach(function() { 
browser.get('/'); 
browser.driver.manage().window().setSize(800, 600); 
}); 

 
it('should show error messages for every field if input is invalid', function() { 
// fill all fields with invalid inputs 
element(by.id('eingabe1')).sendKeys('max'); 
element(by.id('eingabe2')).sendKeys('Max8');

element(by.id('InvalidValue')).isDisplayed().then(function(isVisible) { 
expect(isVisible).to.equal(true); 
}); 
});



it('All fields are shown', function () { 

// check if all fields are shown
element(by.id('eingabe1')).isDisplayed().then(function(isVisible) { 
	expect(isVisible).to.equal(true); 
 }); 

element(by.id('eingabe2')).isDisplayed().then(function(isVisible) { 
	expect(isVisible).to.equal(true); 
 }); 

element(by.id('dropdown')).isDisplayed().then(function(isVisible) { 
	expect(isVisible).to.equal(true); 
 }); 

element(by.id('Button')).isDisplayed().then(function(isVisible) { 
	expect(isVisible).to.equal(true); 
 }); 

});


it('Check calculation', function () { 
// check if a calculation cane be done

element(by.id('eingabe1')).sendKeys('2'); 
element(by.id('dropdown')).sendKeys('+');
element(by.id('eingabe2')).sendKeys('1');

element(by.id('Button')).click();

element(by.id('ergebnis')).isDisplayed().then(function(isVisible) { 
	expect(isVisible).to.equal(true);
	expect(ergebnis).toBe(3); 
 }); 

});
});

