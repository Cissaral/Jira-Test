//var expect = require('chai').expect;

describe('TestModule', function() {
    //beforeEach(module('taschenrechner'));


    beforeEach (module('calculatorApp'));

    var $rootScope, $Scope,$compile,$controller,vm;

    beforeEach (inject(function (_$controller_,_$rootScope_){
    $controller=_$controller_;
    $rootScope=_$rootScope_;
    $scope=$rootScope.$new();
    vm= $controller('CalculatorCtrl',{'$rootScope':$rootScope, 'vm':$scope});
    }));




     it('Modul ist geladen', function () {
         //expect(true).to.be.true;
        assert.isTrue(true, 'It worked!');
    });

    it('Eingaben prüfen ob gültige Zahl', function(){
        var eingabe1 = 'no';
        assert.isNumber(eingabe1);
    });




});


/*describe('TestValue', function() {
beforeEach(module('taschenrechner'));
it('Valider Wert in Textfeld eingegeben', function () {
	eingabe1='no';
    assert.isNumber(eingabe1, 'Eingabewert1 ist keine Zahl');
    eingabe2='xy';
    assert.isNumber(eingabe2, 'Eingabewert2 ist keine Zahl');
});


describe("Calculation", function() {
  it("Berechnung prüfen", function() {
    var ergebnis = 4 + 6;
    //expect(ergebnis).toBe(10);
    assert.notEqual(ergebnis, 10, 'these numbers are not equal');

  });

describe("CalculationNegativ", function() {
  it("Berechnung prüfen", function() {
    var ergebnis = 4 - 6;
    //expect(ergebnis).toBe(10);
    assert.notEqual(ergebnis, -2, 'these numbers are not equal');

  });





*/
<<<<<<< Updated upstream:app/controller/calculator.controller_test.spec.js
=======



>>>>>>> Stashed changes:Test/test.spec.js
