////////////////////////////
// Angular App
////////////////////////////

var app = angular.module('UserNotes', ['ngRoute'])

// Config
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('')
	$routeProvider
		.when('/login', {
			controller: 'LoginCtrl',
			templateUrl: 'partials/login.html'
		})
		.when('/register', {
			controller: 'RegistrationCtrl',
			templateUrl: 'partials/registration.html'
		})
		.when('/new', {
			controller: 'NewNoteCtrl',
			templateUrl: 'partials/new-note.html'
		})
		.when('/notes', {
			controller: 'NotesCtrl',
			templateUrl: 'partials/notes.html'
		})
})

////////////////////////////
// Controlers
////////////////////////////

app.controller('LoginCtrl', function($scope, $http) {
	// Login-related variables go here
})
app.controller('RegistrationCtrl', function($scope, $http) {
	// Registration-related variables go here
})
app.controller('NewNoteCtrl', function($scope, $http) {
	// New note related variables go here
	// Maybe use an ng-model for the input box?
})
app.controller('NotesCtrl', function($scope, $http) {
	// Notes listed
})





// Things to figure out
	// What's shown on each page?
