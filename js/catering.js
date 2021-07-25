//update menu to a single button for view/hide, div id = menu

function toggle() {
     var element = document.getElementById('menu'); 
     if(element.style.display === "none") {
          element.style.display = "block";
     }else{
          element.style.display = "none";
     }
}

// array of genre

// const genre = [
//     {
//      option: 'Fantasy',
//      value: 9 },
//      {
//      option: 'Mythologicalt',
//      value: 10 },
//      {
//      option: 'Historical',
//      value: 8 },
//      {
//      option: 'Event',
//      value: 6 },
// ];

// calculate a base estimate for a dinner party
// based on party size, number of courses and genre selected.
// option value * guests = base price

// function estimate() {
//     let totalEst = document.getElementById('quantity').value * genre.value;
//      if(quantity > 0){
//          alert(`Basic pricing for a party of ${quantity} is ${totalEst}.`);
//      } else {
//          alert('Please enter a number of guests.')
//      }
// }

// var button = document.createElement("button");
// button.innerHTML = "Base Price";

// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);

// button.addEventListener ("click", function() {
//   alert("did something");
// });