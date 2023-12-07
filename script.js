
var myForm = document.getElementById('myForm');
var sendButton = document.getElementById('send_btn');

        function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            const menubtn = document.querySelector('.menubtn')
            sidebar.style.display = 'flex'
            menubtn.style.display = 'none'

        }
        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
            const menubtn = document.querySelector('.menubtn')
            menubtn.style.display = 'flex'
        }

sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (myForm.checkValidity()) {
        
        myForm.action = "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdRmUfwFWQTJPqR1Q70KsW22J_v2jobQSjV9fJzFWbeBo0bJw/formResponse";
        myForm.method = "POST";
        myForm.submit();

        myForm.reset();
        alert('Message sent successfully.');
    } else {
        
        alert('Fill all the places correctly.');
    }
});
