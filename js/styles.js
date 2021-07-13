function validate() {
    var email = documant.getElementById('mail').value;

    var filter = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

       if(filter.text(email)){
//            alert ('Thank you for entering a valid email.');
            return true; 
       } else {
            alert('Please enter a valid email address.');
           return false;
       }
}
console.log(email);
