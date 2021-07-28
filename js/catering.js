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
// guests * courses = the estimate

let people = document.getElementById('guests');
let courseCount = document.getElementById('courses');

let plateCost = [
     [3,6],
     [4,10],
     [5,14],
     [6,18],
     [7,22]
]
// do a for loop to create an estimate


// function mealPP() {
//      let totalEst =  people * mealCost;
//      if (courseCount === 3) {
//           mealCost = 6;
//      }else {
//           mealCost = (courseCount * 2.5);  
//      }
// }
// function estimate () { 
// if(people > 0, courseCount > 2) {
//      alert(`For a party of ${people} served a $(courseCount) course meal, price starts at ${totalEst}.`);
// } else {
//      alert('Please enter the number of guests.');
//      } 
// }  