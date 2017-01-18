////////////////////////////
// Angular App
////////////////////////////

var uid = "123"

// firebase url: https://user-notes-f899c.firebaseio.com/
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

// Write and save note
app.controller('NewNoteCtrl', function($scope, $http) {
	$scope.saveNote = function() {
		console.log("The user note is: ", $scope.userNote)
		let noteObj = {
			uid: uid,
			note: $scope.userNote
		}
		$http({
			method: "POST",
			url: "https://user-notes-f899c.firebaseio.com/.json",
			data: JSON.stringify(noteObj)
		})
		.then(
			$('.user-note').val('')
		)
	}
})

app.controller('NotesCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: "https://user-notes-f899c.firebaseio.com/.json",
	})
	.then((val) => {
		let jsonData = val.data
		let arrayOfNotes = []
		for(firebaseId in jsonData) {
			arrayOfNotes.push(jsonData[firebaseId])
		}
		$scope.notes = arrayOfNotes
		$scope.uid = uid
	})
})



// Things to figure out
	// What's shown on each page?
