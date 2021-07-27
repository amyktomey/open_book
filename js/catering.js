//update menu to a single button for view/hide, div id = menu

function toggle() {
     var element = document.getElementById('menu'); 
     if(element.style.display === "none") {
          element.style.display = "block";
     }else{
          element.style.display = "none";
     }
}

// calculate a base estimate for a dinner party
// guests * courses = totalEst

// function estimate() {
//     let totalEst = document.getElementById('guests') * document.getElementById(courses);
//      if(guests > 0) {
//          return(`For a party of ${guests} served $(courses) course meal starts at ${totalEst}.`);
//      } else {
//          return('Please enter a number of guests.')
//      }
//      return estimate;
// }