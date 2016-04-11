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
        //assert.isTrue(true, 'It worked!');
          assert.isDefined(vm, 'controller is necessary for test enviroment!');

    });


    it('Eingaben prüfen ob gültige Zahl in Feld eingabe1', function(){
        vm.eingabe1 = 1;
        assert.isTrue(vm.isNumber(vm.eingabe1), 'this will pass it is a valid number');
    });

    it('Eingaben prüfen ob ungültige Zahl erkannt wird (eingabe1)', function(){
        vm.eingabe1 = 'no';
        //assert.isNotNumber(vm.eingabe1);
        assert.isNotTrue(vm.isNumber(vm.eingabe1), 'this will pass it is no valid number');

    });


   it('Eingaben prüfen ob gültige Zahl in Feld eingabe2', function(){
        vm.eingabe2 = 101;
        assert.isTrue(vm.isNumber(vm.eingabe2), 'this will pass it is a valid number');
    });

    it('Eingaben prüfen ob ungültige Zahl erkannt wird (eingabe2)', function(){
        vm.eingabe2 = 'xy';
        assert.isNotTrue(vm.isNumber(vm.eingabe2), 'this will pass it is no valid number');
    });

    
      it("Berechnung prüfen +", function() {
        assert.isDefined(vm.calculation, 'Function calculation is defined!');
        vm.eingabe1=4;
        vm.eingabe2=6;
        vm.operations='+';
        vm.calculation(vm.eingabe1,vm.operations,vm.eingabe2);
        assert.equal(vm.ergebnis, 10, 'the calculation delive the correct result');
         });



        it("Berechnung prüfen -", function() {
        vm.eingabe1=4;
        vm.eingabe2=6;
        vm.operations='-';
        vm.calculation(vm.eingabe1,vm.operations,vm.eingabe2);
        assert.equal(vm.ergebnis, '-2', 'the calculation delive the correct result');
         });


      it("Berechnung prüfen *", function() {
            vm.eingabe1=3;
            vm.eingabe2=3;
            vm.operations='*';
            vm.calculation(vm.eingabe1,vm.operations,vm.eingabe2);
            assert.equal(vm.ergebnis, 9, 'the calculation delive the correct result');
             });


      it("Berechnung prüfen /", function() {
            vm.eingabe1=9;
            vm.eingabe2=3;
            vm.operations='/';
            vm.calculation(vm.eingabe1,vm.operations,vm.eingabe2);
            assert.equal(vm.ergebnis, 3, 'the calculation delive the correct result');
             });


 

});





