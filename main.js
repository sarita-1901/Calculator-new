
console.log("Start");
var queue = [];
var input = 0;
var pernegClicked = "0";
var prevInput = 0;

/*Code for flipping*/
var switchStatus = document.getElementById('switch');
var flipobject = document.querySelector('.flip-calc');

switchStatus.addEventListener( 'change', function() {
  flipobject.classList.toggle('is-flipped');
});


/*Get elements - display and answer for 2 calcs*/
const display = document.getElementById('operation');
const answer = document.getElementById('answer');

const display1 = document.getElementById('operation1');
const answer1 = document.getElementById('answer1');

const clear = document.getElementById('clear');
const clear1 = document.getElementById('clear1');

const percent1 = document.getElementById('percent1');
const negate = document.getElementById('negate');

const numkey = document.querySelectorAll('.num');

const operKey = document.querySelectorAll('.oper');


/*Percent event*/

percent1.addEventListener('click',() =>
{
if (input != 0)
  { 
    input = input/100;
    pernegClicked = "1" ;

    if (prevInput != 0)
    {
     display.innerHTML = prevInput ;
     display1.innerHTML = prevInput ;
     display.innerHTML += input;
     display1.innerHTML += input;
   }
    else
    {    
     display.innerHTML = input;
     display1.innerHTML = input;
    }
 
  }
 
 }
 )


/*Negate Event*/

negate.addEventListener('click',() =>
{
if (input != 0)
  { 
    input = (-1) * input;
    pernegClicked = "1" ;

   if (prevInput != 0)
   {
    display.innerHTML = prevInput ;
    display1.innerHTML = prevInput ;
    display.innerHTML += input;
    display1.innerHTML += input;
  }
   else
   {    
    display.innerHTML = input;
    display1.innerHTML = input;
   }

 }

}
)


/*Clear event*/
clear.addEventListener('click',() => {
  queue = [];
  input = 0;
  pernegClicked = "0";  
  prevInput = 0;

  display.innerHTML = input;
  display1.innerHTML = input;
  
  answer.innerHTML = input;
  answer1.innerHTML = input;
})

clear1.addEventListener('click',() => {
  queue = [];
  input = 0;
  pernegClicked = "0";  
  prevInput = 0;

  display.innerHTML = input;
  display1.innerHTML = input;
  
  answer.innerHTML = input;
  answer1.innerHTML = input;

})


numkey.forEach(element => {

  element.addEventListener('click',() => 
  {


//If decimal added and already decimal number, do nothing;
if (!(element.value == "." && String(input).match(/[.]/)) && pernegClicked != "1" ) 
{  
  if (input == 0)
  {  
    prevInput = display.innerHTML;
  }

  if (queue[1] != "=")
  {  
    
  if (display.innerHTML == '0' || display.innerHTML == null) 
    {
    input = element.value;
    lastNumEntered = element.value;
    display.innerHTML = element.value;
    display1.innerHTML = element.value;
    }
    else
    {
    input += element.value;
    display.innerHTML += element.value;
    display1.innerHTML += element.value;
    }
 
  }
}

})
});



operKey.forEach(element => {

  element.addEventListener('click',() => 
{

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
pernegClicked = "0";

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
