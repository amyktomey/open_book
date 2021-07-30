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