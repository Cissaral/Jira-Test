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

	// controller API
	vm.isNumber = isNumber;
	vm.calculation = calculation;
	vm.submit = submit;

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
		vm.ergebnis = parseInt(eingabe1) + parseInt(eingabe2);
		break;

		case '-' :
		vm.ergebnis = parseInt(eingabe1) - parseInt(eingabe2);
		break;

		case '*' :
		vm.ergebnis = parseInt(eingabe1) * parseInt(eingabe2);
		break;

		case '/' :
		vm.ergebnis = parseInt(eingabe1) * parseInt(eingabe2);
		break;
	}
	}

	function submit(){
	  calculation(vm.eingabe1, vm.operations, vm.eingabe2);
	}
}

})();
