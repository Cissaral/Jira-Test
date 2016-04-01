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

	function isNumber (wert){
		if (!isNaN(wert) || wert === ''){
			return true;
			}
			else {
				return false;
			}
	}
}

})();