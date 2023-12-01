// Get the form element by its ID
var myForm = document.getElementById('myForm');

// Get the button element by its ID
var sendButton = document.getElementById('send_btn');

// Add a click event listener to the button
sendButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the form is valid
    if (myForm.checkValidity()) {
        // If the form is valid, submit it programmatically to the Google Form
        myForm.action = "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdRmUfwFWQTJPqR1Q70KsW22J_v2jobQSjV9fJzFWbeBo0bJw/formResponse"; // Replace with your Google Form URL
        myForm.method = "POST";
        myForm.submit();
        
        // Optionally, you can display a success message
        
        myForm.reset();
        alert('Message sent successfully.');
    } else {
        // If the form is not valid, display an error message
        alert('Fill all the places correctly.');
    }
});
