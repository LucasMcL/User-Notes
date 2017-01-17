////////////////////////////
// Angular App
////////////////////////////

var app = angular.module('UserNotes', ['ngRoute'])
app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			controller: 'LoginCtrl',
			templateUrl: 'partials/login.html'
		})
		.when('/registration', {
			controller: 'RegistrationCtrl',
			templateUrl: 'partials/registration.html'
		})
		.when('/new-note', {
			controller: 'NewNoteCtrl',
			templateUrl: 'partials/new-note.html'
		})
		.when('/notes', {
			controller: 'NotesCtrl',
			templateUrl: 'partials/notes.html'
		})
})
