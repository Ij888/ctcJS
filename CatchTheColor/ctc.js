//the JS file
//array of question
//attach  button'x' to a click fn
//click fn
//import {questions} from './questionsData';
//console.log(questions);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const questionIndex = getRandomInt(questions.length);

const firstQuestion = document.querySelector('#questionHolder');
firstQuestion.innerHTML = questions[questionIndex].questionDescription;
//get the img with qSelectr and then modify attr src, must modify with data in question array
document.addEventListener('DOMContentLoaded', () => {
    //define variables _let vs var nuances
//const questions = ['What color is the ball?', 'Touch the blue car', 'Touch the green ball'];
const buttons = document.querySelectorAll('.button');
//console.log(buttons);

//creating the click fn to append on the button
//hoisted variant_ declared fn
clkfunction();

function clkfunction(){
    console.log('i am the click fn')
}

//declared fn variant_ fn epression (anon fn), must call after this epression
let clkfunction2 = function(){
    console.log('i am the click fn 2')
}
clkfunction2();

//es6 sugar
clkfunction3 = ()=> {
    console.log('clickfn£££3')
}
//clkfunction3();

//epression: returns a value



} )
