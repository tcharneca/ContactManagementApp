angular.module('app',[])
	.controller('MainController', function($scope){
		$scope.title = "Contacts Management App";
		$scope.contacts = [
			{	
				id: 0,
				name: 'Steve Wozniak',
				email: 'woz@apple.com',
				location: 'United States',
				primary: '718-886-5540'
			},
			{	
				id: 1,
				name: 'Linus Torvalds',
				email: 'linus@linux.com',
				location: 'Finland',
				primary: '+358 9 568 042'
			},
			{	
				id: 2,
				name: 'Bill Gates',
				email: 'bill@microsoft.com',
				location: 'United States',
				primary: '4841698514'
			},
			{	
				id: 3,
				name: 'Richard Stallman',
				email: 'richard@fsf.org',
				location: 'United States',
				primary: '664 613 7896'
			},
			{	
				id: 4,
				name: 'Ada Lovelace',
				email: 'ada@lovelace.co.uk',
				location: 'United Kingdom',
				primary: '02394 786236'
			},
			{
				id: 5,
				name: 'Alan Turing',
				email: 'alan@turingtest.org.uk',
				location: 'United Kingdom',
				primary: '+44796 37829368'
			},
			{
				id: 6,
				name: 'Charles Babbage',
				email: 'charles@diffengine.com',
				location: 'United Kingdom',
				primary: '+442392343478'
			},
			{
				id: 7,
				name: 'Dennis Ritchie',
				email: 'dennis@cprogramming.com',
				location: 'United States',
				primary: '012-589-1651'
			},
			{
				id: 8,
				name: 'Ken Thompson',
				email: 'ken@unix.net',
				location: 'United States',
				primary: '6434030340'
			},
			{
				id: 9,
				name: 'Steve Jobs',
				email: 'steve@apple.com',
				location: 'United States',
				primary: '805-110-9825'
			}
		];
		
		// CRUD
		function resetForm(){
			$scope.newContact = {
				name: '',
				email: '',
				location: '',
				primary: ''
			};
		}
		
		function addContact(contact){
			contact.id = $scope.contacts.length;
			$scope.contacts.push(contact);
			
			resetForm();
		}
		
		$scope.addContact = addContact;
		$scope.editedContact = null;
		
		function setEditedContact(contact){
			$scope.editedContact = angular.copy(contact); //Assigned to a copy of the contact so it won't update the contact if the editing is cancelled.
		}
		
		$scope.setEditedContact = setEditedContact;
		
		function updateContact(contact){
			var index = _.findIndex($scope.contacts,function(cont){
				return cont.id == contact.id;
			});
			$scope.contacts[index] = contact;
			
			$scope.editedContact = null;
			$scope.isEditing = false;
		} 
		
		$scope.updateContact = updateContact;
		
		function deleteContact(contact){
			_.remove($scope.contacts,function(cont){
				return cont.id == contact.id;
			});
		}
		
		$scope.deleteContact = deleteContact;
		
		// CREATING AND EDITING STATES
		$scope.isCreating = false;
		$scope.isEditing = false;
		
		function startCreating(){
			$scope.isCreating = true;
			$scope.isEditing = false;
		}
		
		function cancelCreating(){
			$scope.isCreating = false;
		}
		
		function startEditing(){
			$scope.isCreating = false;
			$scope.isEditing = true;
		}
		
		function cancelEditing(){
			$scope.isEditing = false;
		}
		
		function shouldShowCreating(){
			return $scope.isCreating && !$scope.isEditing;
		}
		
		function shouldShowEditing(){
			return $scope.isEditing && !$scope.isCreating;
		}
		
		$scope.startCreating = startCreating;
		$scope.cancelCreating = cancelCreating;
		$scope.startEditing = startEditing;
		$scope.cancelEditing = cancelEditing;
		$scope.shouldShowCreating = shouldShowCreating;
		$scope.shouldShowEditing = shouldShowEditing;
	});