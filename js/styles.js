// validate email on any page

function validate() {
    'use strict';
    let email = document.getElementById('mail').value;
    var filter = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
       if(filter.text(email)){
//            alert ('Thank you for entering a valid email.');
            return true; 
       } else {
            alert('Please enter a valid email address.');
            return false;
       }
}
console.log(email);

// calculate a base estimate for a dinner party... AND cake orders

//<option value="fanatasy">Fantasy</option>
//<option value="mythological">Mythology</option>
//<option value="historical">History</option>
//<option value="event">Events</option>
function estimate() {
     let totalEst = document.getElementById('quantity').value * 8;
     if(quantity => 0){
          alert('Basic pricing for a party of ' `$[quantity]`+'is '+`$[totalEst]'.'`);
     } else {
          alert('Please enter a number of guests.');
     }
}

// option value * guests = base price
//array of options with values 

optionValue = []

//change menu to a single button for view/hide, moving script to styles

//photo slideahow on cakes page... seperate jsfile - perhaps move the cake images to another file as well?

// on confection page set up a request asking for flavors... 
// that responds with a list of available candies
// pull list... array? when requesting a flavor, 
//if not available respond flavor unavailable, please put in a special request.