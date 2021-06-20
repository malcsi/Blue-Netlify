---
layout: layouts/post.njk
title: JavaScript functions
description: Different functions used
date: 2021-06-16
---

<br/>
In this exercise I have been working with JavaScript variables, "if" and "else if" statements, arithmetic operators and functions.
I built a few functions in this assignment and invoked them as needed.
As seen below, the first function outputs a sentence. 
A simple program was created that merges a first and a last name. After that,a return statement was included. 


<code>
function combineNames(firstName, secondName) { <br/>
  document.write('My name is :' + firstName + ' ' + secondName); <br/>
}<br/>

combineNames('Ana', 'Maria');<br/> </code>
<em>OUTPUT:<br/>
 My name is :Ana Maria </em>
<br/>---------------------------------------<br/>
The variable "temperature" is used in the second function. A code was created that instructs you to put on a coat if the temperature falls below 50 degrees. The software was expanded to display several phrases based on the value that was entered.</


<code>
  function temperatureFunction(currentTemp) {<br/>
  let coat ='YES!';<br/>
  if (currentTemp > 50) {<br/>
    coat = 'NO!'<br/>
  }<br/>
  return coat;<br/>
}<br/>
document.write('Should I wear a coat if the temp is less than 50: ' + temperatureFunction(40));</code>

  <em>OUTPUT: <br/>Should I wear a coat if the temp is less than 50: YES!</em>

<br/>---------------------------------------<br/>
<code>
  function temperatureFunc(currentTemp) {<br/>
  let coat = "";<br/>
  <br/>
  if (currentTemp < 0) {<br/>
    coat = 'Stay inside!';<br/>
  } else if (currentTemp < 30) {<br/>
    coat = 'Yes, but with a hat.';<br/>
  } else if (currentTemp < 50) {<br/>
    coat = 'YES!'<br/>
  } else {<br/>
    coat = 'Pants and vest is fine!';<br/>
  }<br/>
  return coat;<br/>
}<br/>
<br/>
document.write('Less than 50 degrees: ' + temperatureFunc(49));<br/>
document.write('Less than 30 degrees: ' + temperatureFunc(25));<br/>
document.write('Less than 0 degrees: ' + temperatureFunc(-2));<br/>
document.write('Over 50 degrees: ' + temperatureFunc(55));<br/> </code>

<em>OUTPUT: <br/>
Less than 50 degrees: YES! <br/>
Less than 30 degrees: Yes, but with a hat.<br/>
Less than 0 degrees: Stay inside!<br/>
Over 50 degrees: Pants and vest is fine!<br/>
</em>
<br/>---------------------------------------<br/>
The third function adds a logical operator to the "Shall I wear a coat?" program. The software defines "if" and "else if" to determine whether you should go or stay inside.

<code>
function tempFunc(currentTemp) {<br/>
  let coat = "Go outside";<br/>
  <br/>
  if (currentTemp > 70 || currentTemp < 20) {<br/>
    coat = "Stay inside";<br/>
  }<br/>
  return coat;<br/>
}<br/>

document.write(tempFunc(50));<br/>
document.write(tempFunc(10));<br/>
document.write(tempFunc(72));<br/>
</code>

<em>OUTPUT: <br/>
Go outside<br/>
Stay inside<br/>
Stay inside<br/>
</em>