function totCost() {
    boxes = document.getElementById("boxes").value;
    count = boxes * 6;
    totCost = boxes * count;
   
    if(boxes > 0) {              
         cost = boxes * count;

         alert(`${boxes} (${count}) will cost $${Totost}.`);
         }else {
         alert('Please enter the number of boxes');         
         console.log(boxes);
         console.log(count);
        }
     }


