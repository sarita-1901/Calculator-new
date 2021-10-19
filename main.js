
console.log("Start");
var queue = [];
var input = 0;
var start = 0;
var percentclicked = "0";

/*Code for flipping*/
var pinkswitch = document.querySelector('.pink');
var flipobject = document.querySelector('.flip-calc');

pinkswitch.addEventListener( 'click', function() {
  flipobject.classList.toggle('is-flipped');
});


/*Get elements*/
const display = document.getElementById('operation');
const answer = document.getElementById('answer');

const display1 = document.getElementById('operation1');
const answer1 = document.getElementById('answer1');


//const decimal = document.getElementById('decimal');

const clear = document.getElementById('clear');
const clear1 = document.getElementById('clear1');

const percent = document.getElementById('percent');
const percent1 = document.getElementById('percent1');


const numkey = document.querySelectorAll('.num');

const operKey = document.querySelectorAll('.oper');


/*Percent event*/

percent1.addEventListener('click',() =>
{
if (input != 0)
  { 
  display.innerHTML = input/100;
  display1.innerHTML = input/100;

  answer.innerHTML = input/100;
  answer1.innerHTML = input/100;

  percentclicked = "1";
  input = input/100;
 }

}
)


/*Clear event*/
clear.addEventListener('click',() => {
  queue = [];
  input = 0;
  start = 0;
  display.innerHTML = input;
  display1.innerHTML = input;
  
  answer.innerHTML = input;
  answer1.innerHTML = input;
})

clear1.addEventListener('click',() => {
  queue = [];
  input = 0;
  start = 0;
  display.innerHTML = input;
  display1.innerHTML = input;
  
  answer.innerHTML = input;
  answer1.innerHTML = input;
})


numkey.forEach(element => {

  element.addEventListener('click',() => 
  {


//If decimal added and already decimal number, do nothing;
if (element.value == "." && String(input).match(/[.]/))
{  
}

else
{
  if (queue[1] != "=" && percentclicked != "1")
  {   
  if (start == '0') 
    {
    input = element.value;
    display.innerHTML = element.value;
    display1.innerHTML = element.value;
    }
    else
    {
    input += element.value;
    display.innerHTML += element.value;
    display1.innerHTML += element.value;
    }
 
   start = 1;
  }
}

})
});



operKey.forEach(element => {

  element.addEventListener('click',() => 
{
  //Form array numkey followed by oper
  if (input !== 0)
  {
input = parseFloat(input);

if (queue[0] == null)
{
queue[0] = input;
queue[1] = element.value;
}

else
{
queue[2] = input;
queue[0] = calculate(queue[0],queue[1],queue[2]);
queue[1] = element.value;

}

input = 0;
display.innerHTML += element.value;
answer.innerHTML = queue[0];
display1.innerHTML += element.value;
answer1.innerHTML = queue[0];
}});

})





const calculate = ((parm1, parm2, parm3) =>
{
  var calcAns = 0;
  switch(parm2)
  {
case '+':
calcAns = parm1 + parm3;
break;

case '-':
calcAns = parm1 - parm3;
break;

case '*':
calcAns = parm1 * parm3;
break;

case '/':
calcAns = parm1 / parm3;
break;


}

calcAns = calcAns.toFixed(10);
calcAns = parseFloat(calcAns);

return calcAns;
})

//text to speech

const play = document.getElementById("play");
const play1 = document.getElementById("play1");


play.addEventListener(('click'),() => {
  var finalText = display.innerHTML;
  finalText = finalText + answer.innerHTML
  var msg = new SpeechSynthesisUtterance();
  msg.text = finalText;
  window.speechSynthesis.speak(msg);
});

play1.addEventListener(('click'),() => {
  var finalText = display.innerHTML;
  finalText = finalText + answer.innerHTML
  var msg = new SpeechSynthesisUtterance();
  msg.text = finalText;
  window.speechSynthesis.speak(msg);
});
