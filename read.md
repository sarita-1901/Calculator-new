
CalcValue
==============================================================

CalcValue is a calculator that supports basic arithmatic operations and provides 2 layouts to choose from. The first one is an attempt to mimic the layout of iPhone calculator whereas the second is a layout designed by me. 


Functionality
-------------------------
CalcValue performs the following operations:

* Addition
* Subtraction
* Multiplication
* Division
* Percentage of a number
* Negate of a number

The calculator supports operations even on a series of inputs. At every input, it calculates the answer.

Special Features:
-------------------------

There are 2 output screens provided to show the inputs being entered as well as to show the calculated value at any point. 

There is also a PLAY button available that uses a TextToSpeech service. This is very useful in case user provides long calculations and wants to tally that again with the help of audio.  

There is a toggle button available to switch between the layouts. Both the layouts are synced. So, the user can choose to toggle at any given point. 


![Calc Demo](CalcValue2.gif)


Features currently not supported:
-------------------------

* BODMAS 
* Storing of results in cache


Technologies Used: 
-------------------------

CalcValue has been built using Javascript, HTML and CSS. It has also been tested using Cybress Testing framework. 

Scenarios covered:
-------------------------

The following scenarios have also been taken care of in terms of handling user input:
1) If a decimal has already been added to a number, clicking decimal again does nothing. 
2) After an operation key (+,-,*,/), it is not possible to use another operation key and user will be forced to enter a numeric key in order to proceed
3) After user clicks negate and percentage, only the last number entered is affected. User cannot enter another numeric key immediately after negate and percentage are used. Operation key will have to be used in order to proceed. 

Acknowledgements:
-------------------------

The project has been built as part of the training program with Nology. Many thanks to Yujin and Sam for the amazing training they have been providing. The project would not have been accomplised had it not been for their valuable inputs and support. 