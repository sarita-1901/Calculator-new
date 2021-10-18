
console.log("Start");
var queue = [];
var input = 0;
var start = 0;

const display = document.getElementById('operation');
const answer = document.getElementById('answer');

const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');

clear.addEventListener('click',() => {
  queue = [];
  input = 0;
  start = 0;
  display.innerHTML = input;
  answer.innerHTML = input;
})

const numkey = document.querySelectorAll('.num');
numkey.forEach(element => {

  element.addEventListener('click',() => 
{

/*  if ( document.getElementById("answer").innerHTML ===  "ERROR" || (document.getElementById("answer").innerHTML == "0" && element.value != "."))
  { document.getElementById("answer").innerHTML = ""; }
*/

//If decimal added and already decimal number, do nothing;

if (element.value == "." && 1==2) 
//&& input.match(/[.]/))
{

  } 
else { 
  if (start == '0') 
  {
input = element.value;
display.innerHTML = element.value;
  }
  else{
  input += element.value;
  display.innerHTML += element.value;
  }
 
start = 1;
 //display.innerHTML = input;
}
})
});

const operKey = document.querySelectorAll('.oper');
operKey.forEach(element => {

  element.addEventListener('click',() => 
{
  //Form array numkey followed by oper
  if (input !== 0)
  {
input = parseFloat(input);

if (queue[0] == null)
{
  console.log("Start of array");
queue[0] = input;
queue[1] = element.value;
}

else
{
  console.log("Middle of array");
queue[2] = input;
queue[0] = calculate(queue[0],queue[1],queue[2]);
queue[1] = element.value;

}
console.log("element 0 - " + queue[0]);
console.log("element 1 - " + queue[1]);
console.log("element 2 - " + queue[2]);

input = 0;
display.innerHTML += element.value;
answer.innerHTML = queue[0];
}});

})

const calculate = ((parm1, parm2, parm3) =>
{
  console.log("Within Calculate");
  console.log(parm1 + ":" + parm2 + ":" + parm3);
  var calcAns = 0;
  switch(parm2)
  {
case '+':
calcAns = parm1 + parm2;
break;

case '-':
calcAns = parm1 + parm2;
break;

case '*':
calcAns = parm1 + parm2;
break;

case '/':
calcAns = parm1 + parm2;
break;

}
return calcAns;
})


//Equal button
const equalKey = document.getElementById('equal');
equalKey.addEventListener('click',() => {
  // input = parseFloat(input);
  const dividedByZero = 0;
  // queue.push(input);
   var answer = queue[0];

   for (let index = 2; index < queue.length; index = index +2) {
     const element = array[index];

     switch (queue[i-1]) {
      case '+':
          answer+= value[i];
          break;
      case '-':
          answer-= value[i];
          break;
      case '/':    if (value[i] === 0)   dividedByZero = 1;
              else      answer = answer / value[i];

          break;
      case'*': answer = answer * value[i];
          break;
  }

   }
     answer = answer.toFixed(10);
     answer = parseFloat(answer);
     document.getElementById("answer").innerHTML =  answer ;

   

})


////
