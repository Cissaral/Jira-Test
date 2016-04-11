//var expect = require('chai').expect;

describe('Calculator application', function() {

    beforeEach(module('calculatorApp'));

    var $rootScope, $scope, $compile, $controller, vm;

    beforeEach(inject(function(_$controller_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        vm = $controller('CalculatorCtrl', {'$rootScope': $rootScope, 'vm': $scope });
    }));

     it('should has injected the calculatorController into the test environment', function () {
         //expect(true).to.be.true; // <-- expect() for BDD, not TDD
        //assert.isTrue(true, 'It worked!'); // <-- assert() for TDD
        assert.isDefined(vm, 'Controller is necessary for test environment!');
    });

    describe('Validate input', function(){
        it('should check if invalid input is entered (everything except numbers) into input1', function(){
            vm.input1 = 'Asod/?%§';
            assert.isNotNumber(vm.input1, 'Invalid input!');
        });

        it('should check if invalid input is entered (everything except numbers) into input2', function(){
            vm.input2 = 'Asod/?%§';
            assert.isNotNumber(vm.input2, 'Invalid input!');
        });

        it('should check if a number is entered', function(){
            vm.input1 = 42;
            assert.isNumber(vm.input1, 'Invalid input!');
        });
    });

    describe('Calculate', function(){
        it('should sum 1 + 1', function(){
            vm.input1 = 1;
            vm.input2 = 1;
            vm.arithmetic = '+';
            vm.calculate();
            assert.equal(vm.result, 2, 'Result is not 2!');
        });

        it('should substract 1 - 1', function(){
            vm.input1 = 5;
            vm.input2 = 1;
            vm.arithmetic = '-';
            vm.calculate();
            assert.equal(vm.result, 4, 'Result is not 4!');
        });

        it('should substract 2 - 12', function(){
            vm.input1 = 2;
            vm.input2 = 12;
            vm.arithmetic = '-';
            vm.calculate();
            assert.equal(vm.result, -10, 'Result is not -10!');
        });

        it('should multiply 4 by 12', function(){
            vm.input1 = 4;
            vm.input2 = 12;
            vm.arithmetic = '*';
            vm.calculate();
            assert.equal(vm.result, 48, 'Result is not 48!');
        });

        it('should divide 12 by 5', function(){
            vm.input1 = 12;
            vm.input2 = 5;
            vm.arithmetic = '/';
            vm.calculate();
            assert.equal(vm.result, 2.4, 'Result is not 2.4!');
        });

        it('should not divide by 0', function(){
            vm.input1 = 10;
            vm.input2 = 0;
            vm.arithmetic = '/';
            vm.calculate();
            assert.isNull(vm.result, 'Prevent Division by 0!');
            assert.equal(vm.error,  'Division durch 0!', 'Give the user a feedback.');
        });

    });
});
