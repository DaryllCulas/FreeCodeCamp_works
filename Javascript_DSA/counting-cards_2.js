let count = 0;

function cc(card) {
  // Only change code below this line

switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++; 
     break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
      break;
}

 let decision = "Hold";
  if(count > 0) {
    decision = "Bet";
  }
 // Ternary: let decision = count > 0 ? "Bet" : "Hold";



  return `${count} ${decision}`;
  // Only change code above this line
}

cc(2); 
cc(3); 
cc(7);
cc('K');
cc('A');