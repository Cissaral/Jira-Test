(function() {
'use strict';

angular
	.module('calculatorApp')
	.controller('CalculatorCtrl', CalculatorCtrl);

function CalculatorCtrl(){
	var vm = this;
	// Controller-Variable
	vm.eingabe1 = '';
	vm.eingabe2 = '';
	vm.ergebnis;

	// controller API
	vm.isNumber = isNumber;
	vm.calculation = calculation;

	function isNumber (wert){
		if (!isNaN(wert) || wert === ''){
			return true;
			}
			else {
				return false;
			}
	}

	function calculation (eingabe1,operations,eingabe2){
	switch(operations){
		case '+' : 
		vm.ergebnis = eingabe1 + eingabe2;
		break;
		case '-' : 
		vm.ergebnis = eingabe1 - eingabe2;
		break;
		case '*' : 
		vm.ergebnis = eingabe1 * eingabe2;
		break;
		case '/' : 
		vm.ergebnis = eingabe1 / eingabe2;
		break;
	}
	}
}

})();