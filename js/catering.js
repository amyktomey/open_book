//menu to a single button for view/hide, default hidden
function toggle() {
     var element = document.getElementById('menu'); 
     if(element.style.display === "none") {
          element.style.display = "block";
     }else{
          element.style.display = "none";
     }
}

// calculate a base estimate for a dinner party

function estimate() {
     people = document.getElementById("guests").value;
     courseCount = document.getElementById("courses").value;
     plateCost = courseCount * 2.5; 

     if(people > 0, courseCount > 2) {              
          totalEst = plateCost * people;

          alert(`For a party of ${people} served a ${courseCount} course meal, price starts at $${totalEst}.`);
          }else {
          alert('Please enter the number of guests and/or courses.');         
          }
      }

//  collect info for a request and store into anopther file.

let saveFile = () => {

// Get the data from each element on the form.
const fantasy = document.getElementById('fantasy');
const mythology = document.getElementById('mythology');
const history = document.getElementById('history');
const event = document.getElementById('other');
const noSugar = document.getElementById('noSugar');
const keto = document.getElementById('ketodiet');
const nogluten = document.getElementById('nodairy');
const allergy = document.getElementById('sneezers');
const msg = document.getElementById('msg');


// This variable stores all the data.
let data = 
     '\r Name: ' + name.value + ' \r\n ' + 
     'Email: ' + mail.value + ' \r\n ' + 
     'Genre: ' + occ_type.value + ' \r\n ' + 
     'Restrictions: ' + restrict.value + ' \r\n ' + 
     'Message: ' + msg.value;

// Convert the text to BLOB.
const textToBLOB = new Blob([data], { type: 'text/plain' });
const sFileName = 'formData.txt';	   // The file to save the data.

let newLink = document.createElement("a");
newLink.download = sFileName;

if (window.webkitURL != null) {
     newLink.href = window.webkitURL.createObjectURL(textToBLOB);
}
else {
     newLink.href = window.URL.createObjectURL(textToBLOB);
     newLink.style.display = "none";
     document.body.appendChild(newLink);
}

newLink.click(); 
}      