---
layout: layouts/posts-base.njk
title: JavaScript functions
description: Function and Control Flow
date: 2021-06-16
---
<div style="margin:0 5%;>
<p><p><br/>
In this exercise I have been working with JavaScript variables, 'if' and 'else if' statements, arithmetic operators and functions.
I built a few functions in this assignment and invoked them as needed.
As seen below, the first function outputs a sentence. 
A simple program was created that merges a first and a last name. After that,a return statement was included. </p>
<br/><br/>
<code style="color: rgb(31, 32, 138)">
function combineNames(firstName, secondName) { <br/>
  document.write('My name is :' + firstName + ' ' + secondName); <br/>
}<br/>
<p>combineNames('Ana', 'Maria');<br/> </code>
  <br/>
<em style="color: rgb(0, 140, 255);">OUTPUT:<br/>
My name is :Ana Maria </em>
<br/><br/>---------------------------------------<br/><br/>
The variable &quot;temperature&quot; is used in the second function. A code was created that instructs you to put on a coat if the temperature falls below 50 degrees. The software was expanded to display several phrases based on the value that was entered.</p>
<code style="color: rgb(31, 32, 138);">
  &nbsp;&nbsp;  function temperatureFunction(currentTemp) {<br/>
    &nbsp;&nbsp;&nbsp;  let coat ='YES!';<br/>
    &nbsp;&nbsp;&nbsp;  if (currentTemp > 50) {<br/>
      &nbsp;&nbsp;&nbsp;    coat = 'NO!'<br/>
      &nbsp;&nbsp;&nbsp;  }<br/>
      &nbsp;&nbsp; return coat;<br/>
      &nbsp;&nbsp;}<br/>
      &nbsp;&nbsp;document.write('Should I wear a coat if the temp is less than 50: ' + temperatureFunction(40));
</code>
<p><em style="color: rgb(0, 140, 255);">OUTPUT: <br/>Should I wear a coat if the temp is less than 50: YES!</em></p>
<p>---------------------------------------<br/><br/>
<code style="color: rgb(31, 32, 138)">
function temperatureFunc(currentTemp) {<br/>
  &nbsp;&nbsp;let coat = &quot;&quot;;<br/>
  &nbsp;&nbsp;<br/>
  &nbsp;&nbsp;if (currentTemp &lt; 0) {<br/>
    &nbsp;&nbsp;coat = 'Stay inside!';<br/>
    &nbsp;&nbsp;} else if (currentTemp &lt; 30) {<br/>
      &nbsp;&nbsp;coat = 'Yes, but with a hat.';<br/>
      &nbsp;&nbsp;} else if (currentTemp &lt; 50) {<br/>
        &nbsp;&nbsp;coat = 'YES!'<br/>
        &nbsp;&nbsp;} else {<br/>
          &nbsp;&nbsp;coat = 'Pants and vest is fine!';<br/>
          &nbsp;&nbsp;}<br/>
          &nbsp;return coat;<br/>
}<br/>
<br/>
document.write('Less than 50 degrees: ' + temperatureFunc(49));<br/>
document.write('Less than 30 degrees: ' + temperatureFunc(25));<br/>
document.write('Less than 0 degrees: ' + temperatureFunc(-2));<br/>
document.write('Over 50 degrees: ' + temperatureFunc(55));<br/> </code></p>
<p><em style="color: rgb(0, 140, 255);">OUTPUT: <br/>
Less than 50 degrees: YES! <br/>
Less than 30 degrees: Yes, but with a hat.<br/>
Less than 0 degrees: Stay inside!<br/>
Over 50 degrees: Pants and vest is fine!<br/>
</em>
<br/>---------------------------------------<br/><br/>
The third function adds a logical operator to the &quot;Shall I wear a coat?&quot; program. The software defines &quot;if&quot; and &quot;else if&quot; to determine whether you should go or stay inside.</p>
<code style="color: rgb(31, 32, 138)">
  &nbsp;&nbsp;function tempFunc(currentTemp) {<br/>
    &nbsp;&nbsp;&nbsp;  let coat = "Go outside";<br/>
  <br/>
  &nbsp;&nbsp;&nbsp;  if (currentTemp > 70 || currentTemp < 20) {<br/>
    &nbsp;&nbsp;&nbsp;   coat = "Stay inside";<br/>
    &nbsp;&nbsp;  }<br/>
    &nbsp;&nbsp;  return coat;<br/>
    &nbsp; &nbsp;}<br/>
<p>document.write(tempFunc(50));<br/>
document.write(tempFunc(10));<br/>
document.write(tempFunc(72));<br/>
</code></p>
<p><em style="color: rgb(0, 140, 255);">OUTPUT: <br/>
Go outside<br/>
Stay inside<br/>
Stay inside<br/>
</em></p>
</p>
</div>