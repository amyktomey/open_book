// validate name

function isValidName(name) {
   const checkName = document.getElementById(name); 
   var filter = /^[A-Za-z -']+$/;
     if(filter.test(checkName.value)){
          return true; 
     } else {
          alert('Please enter your name.');
     }
}

// validate email

function validate(mail) {
    const email = document.getElementById(mail);

     var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; ;

       if(filter.test(email.value)){
            return true; 
       } else {
            alert('Please enter a valid email address.');
       }
}