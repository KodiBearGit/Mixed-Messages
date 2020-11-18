//random message generator mimicing useless fortune cookie messages
//message made up of three (3) random portions
function numberGenerator (number) {
  return Math.floor(Math.random()* number + 1);
};

function sectionOne (randomNumber) {
//will need to flesh out arrayItems for readbility 
  let sectionOneArray = ['will', 'should', 'can\'t', 'may', 
'might'];
  return sectionOneArray[randomNumber];
};

function sectionTwo (randomNumber) {
  //will need to flesh out arrayItems for readbility (verb)
  let sectionTwoArray = ['require', 'avoid', 'engage', 'desire', 'escape'];
  return sectionTwoArray[randomNumber];
}

function sectionThree (randomNumber) {
    //will need to flesh out arrayItems for readbility
  let sectionThreeArray = ['a good friend', 'a happy puppy', 'a strong mentor', 'a small fortune', 'some serious luck'];
  return sectionThreeArray[randomNumber];
}

function fortuneMessage () {
  let fortuneMessage = `You ${sectionOne(numberGenerator(5))} ${sectionTwo(numberGenerator(5))} ${sectionThree(numberGenerator(5))}!`;
  return fortuneMessage;
}

console.log(numberGenerator(5));
console.log(fortuneMessage());
