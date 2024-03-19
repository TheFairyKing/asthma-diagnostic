document.addEventListener('DOMContentLoaded', function() {
    var signUpForm = document.getElementById('signUpForm');
    
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get username and password values
        var username = signUpForm.elements['username'].value;
        var password = signUpForm.elements['password'].value;

        // Perform user registration (you can implement your registration logic here)
        // Example: Send a request to your backend API to create a new user
        // If successful, redirect to sign-in page
        // Otherwise, display an error message
    });
});