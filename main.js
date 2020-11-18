//random message generator mimicing a classic fortune cookie message
//message made up of three (3) random portions
function numberGenerator (number) {
  return Math.floor((Math.random)* number);
};

function sectionOne (randomNumber) {
//will need to flesh out arrayItems for readbility
  let sectionOneArray = ['will', 'should', 'need to', 'may', 
'might'];
  return sectionOneArray[randomNumber];
};

function sectionTwo (randomNumber) {
  //will need to flesh out arrayItems for readbility
  let sectionTwoArray = ['require', 'should', 'need to', 'may require', 'want to'];
  return sectionTwoArray[randomNumber];
}

function sectionThree (randomNumber) {
    //will need to flesh out arrayItems for readbility
  let sectionThreeArray = ['require', 'should', 'need to', 'may require', 'want to'];
  return sectionThreeArray[randomNumber];
}