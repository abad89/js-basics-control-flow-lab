function scuberGreetingForFeet(distance){
  // Write your code here!
  let message
  if (distance <= 400) {
    message = `This one is on me!`
  }
  if (distance >400 && distance <2499) {
    message = 'I will gladly take your thirty bucks.'
  }
  if (distance >=2500) {
    message = 'No can do.'
  }
  return message
};

function ternaryCheckCity(city){
  // Write your code here!
  let message
  if (city === `NYC`) {
    message = `Ok, sounds good.`
  }
  if (city !== `NYC`) {
    message = `No go.`
  }
  return message
};

function switchOnCharmFromTip(tipDesc){
  // Write your code here!
 let message;
 switch (tipDesc) {
   case `generous`:
     message = `Thank you so much.`;
     break;
  case `not as generous`:
    message = `Thank you.`;
    break;
  default:
    message = `Bye.`
 }
 return message;
};