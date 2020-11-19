//random message generator mimicing useless fortune cookie messages
//message made up of three (3) random portions
function numberGenerator (number) {
  //want to return 0 to array.length
  return Math.floor(Math.random()* number);
};

function lottoNumberGenerator (number) {
    //want to return 1 to maxDrawingNumber
    return Math.floor(Math.random()* number + 1);
  };
  

//array of items to generate a "not-so-much-a-fortune" sentance
let sectionOneArray = ['will', 'should', 'can\'t', 'may', 
'might'];
let sectionTwoArray = ['require', 'avoid', 'look into', 'desire', 'escape'];
let sectionThreeArray = ['a good friend', 'a happy puppy', 'a strong mentor', 'a small fortune', 'some serious luck'];

function fortunePortion(array, number) {
  return array[number];
}

//Next Steps part of project is "You’re welcome to expand your program beyond these project tasks and get creative!"  I've decided to add a randomly generated set of PowerBall Numbers to the end of the fortune.

let powerBallArray = [];
function powerBallNumberGenerator () {
  for (let i = 0; i < 5; i++) {
    powerBallArray[i] = lottoNumberGenerator (69);
  }
  powerBallArray[5] = lottoNumberGenerator (26);
  return powerBallArray.join(', ');
}

//I originally used three separate functions and had this function using string interpolation but concatenation seemed to be a cleaner way to present it.
function fortuneMessageGenerator () {
  let fortuneMessage = 
  'You ' + 
  fortunePortion(sectionOneArray, numberGenerator(sectionOneArray.length)) + 
  ' ' +
  fortunePortion(sectionTwoArray, numberGenerator(sectionTwoArray.length)) + 
  ' ' +
  fortunePortion(sectionThreeArray, numberGenerator(sectionThreeArray.length))+
  '!  ' +
  'PowerBall #s: ' +
  powerBallNumberGenerator();
  ;
  return fortuneMessage;
}

let fortuneMessageArray = [];
function fortuneMessageRepeater (count) {
  for (let i = 0; i <= count; i ++) {
    fortuneMessageArray[i] = fortuneMessageGenerator();
  }
  return fortuneMessageArray;
}

//generating the number of messages to array in paretheses, set to ten (10) for now.
console.log(fortuneMessageRepeater(10));
//console.log(powerBallNumberGenerator())


