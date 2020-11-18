//random message generator mimicing useless fortune cookie messages
//message made up of three (3) random portions
function numberGenerator (number) {
  //want to return 0 to 4
  return Math.floor(Math.random()* number);
};

let sectionOneArray = ['will', 'should', 'can\'t', 'may', 
'might'];
let sectionTwoArray = ['require', 'avoid', 'look into', 'desire', 'escape'];
let sectionThreeArray = ['a good friend', 'a happy puppy', 'a strong mentor', 'a small fortune', 'some serious luck'];

function fortunePortion(array, number) {
  return array[number];
}

function fortuneMessage () {
  let fortuneMessage = 
  'You ' + 
  fortunePortion(sectionOneArray, numberGenerator(sectionOneArray.length)) + 
  ' ' +
  fortunePortion(sectionTwoArray, numberGenerator(sectionTwoArray.length)) + 
  ' ' +
  fortunePortion(sectionThreeArray, numberGenerator(sectionThreeArray.length))+
  '!';
  return fortuneMessage;
}

//console.log(numberGenerator(5));
console.log(fortuneMessage());
