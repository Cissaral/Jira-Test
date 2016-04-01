(function(){
'use strict';

angular
	.module('calculatorApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {

//define module-specific routes here
$stateProvider.state('index', {
url : '/',
templateUrl : './app/views/calculator.html',
controller: 'CalculatorCtrl', //Controller zum dynamischen Anzeigen des Moduls
controllerAs : 'calculatorVm' //Aliasname fuer Controller
});

// catch not defined url paths
$urlRouterProvider.otherwise('/');
}

})();
