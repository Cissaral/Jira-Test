(function() {
'use strict';

angular
	.module('calculatorApp')
	.controller('CalculatorCtrl', CalculatorCtrl);

function CalculatorCtrl(){
	var vm = this;
	// Controller-Variable
	vm.input1 = '';
	vm.input2 = '';
	vm.arithmetic,
	vm.result,
	vm.error;
	vm.invalidInput = 'Falsche Eingabe!	';

	vm.onlyNumberPattern = /^[0-9]+$/;

	// controller API
	vm.calculate = calculate;
	vm.submit = submit;

	function calculate(){
		vm.error = null;
		vm.result = null;

		//MISSING: Do not calculate, if input is invalid

		switch(vm.arithmetic){
			case '+':
				vm.result = parseInt(vm.input1) + parseInt(vm.input2);
				break;
			case '-':
				vm.result = parseInt(vm.input1) - parseInt(vm.input2);
				break;

			case '*':
				vm.result = parseInt(vm.input1) * parseInt(vm.input2);
				break;

			case '/':
				if(vm.input2 === 0){
					vm.error = 'Division durch 0!';
				}
				else{
					vm.result = parseInt(vm.input1) / parseInt(vm.input2);
				}
				break;

			default:
				vm.error = 'Keine Rechenart ausgewählt!';
		}
		//console.log(vm.arithmetic);
	}

	function submit(){
		calculate();
	}

}

})();
