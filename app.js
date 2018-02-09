var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/impresoras3d', {
		templateUrl: 'pages/impresoras3d.html',
		controller: '3dController'
	})
	.when('/sobrenosotros', {
		templateUrl: 'pages/sobrenosotros.html',
		controller: 'snController'
	})

	.when('/contacto', {
		templateUrl: 'pages/contacto.html',
		controller: 'cnctoController'
	})
	.when('/nuestrosservicios', {
		templateUrl: 'pages/nuestrosservicios.html',
		controller: 'nsController'
	})
	.when('/routers', {
		templateUrl: 'pages/routers.html',
		controller: 'routersController'
	})
		.when('/proyectos-realizados', {
		templateUrl: 'pages/proyectos-realizados.html',
		controller: 'prController'
	})
				.when('/soporte', {
		templateUrl: 'pages/soporte.html',
		controller: 'soporteController'
	})
});

myApp.controller('mainController', ['$scope', '$log',  function($scope, $log){

}]);

myApp.controller('snController', ['$scope', '$log',  function($scope, $log){

}]);

myApp.controller('cnctoController', ['$scope', '$log',  function($scope, $log){

}]);


myApp.controller('3dController', ['$scope', '$log',  function($scope, $log){

}]);

myApp.controller('nsController', ['$scope', '$log',  function($scope, $log){

}]);
myApp.controller('routersController', ['$scope', '$log',  function($scope, $log){

}]);
myApp.controller('prController', ['$scope', '$log',  function($scope, $log){

}]);
myApp.controller('soporteController', ['$scope', '$log',  function($scope, $log){

}]);
