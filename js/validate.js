// validate email

function validate(mail) {
    const email = document.getElementById(mail);

     var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    ;

       if(filter.test(email.value)){
            return true; 
       } else {
            alert('Please enter a valid email address.');
/*            return false; */
       }
}