---
layout: layouts/posts-base.njk
title: JavaScript Practicals
description: Switch Statements and calculations
date: 2021-06-18
---
<pre style="margin: 5%;">
In this exercise, I completed three tasks using JavaScript functions written this time
 in a modern style, and also switch statements were used.
<br/>-----------------------------------<br/>
For the first exercise, I wrote a function that returns a percentage of a given integer.

<code style="color: blue">
const percentageCalculator = (number, percentage) => {
  let result = percentage / 100 * number;
  return result;
}

document.write(percentageCalculator(387, 4.3));
</code>

<em style="color: green" >OUTPUT: 16.641 </em>

<br/>-----------------------------------<br/><br/>
The second exercise is a basic programme that allows us to order three different 
types of drinks, each with three different sizes.

<code style="color: blue">
const sizeAndDrinkOrder = (size, drink) => {
  switch(drink) {
    case "cola":
      var softDrinkLabel = "Cola"
      break;
    case "orange":
      var softDrinkLabel = "Orangeade"
      break;
    case "lemon":
      var softDrinkLabel = "Lemonade"
      break;
  }
  return `You have ordered a ${size} of ${softDrinkLabel}`;
}

document.write(sizeAndDrinkOrder("Large", "cola"));
document.write(sizeAndDrinkOrder("Medium", "orange"));
document.write(sizeAndDrinkOrder("Small", "lemon"));
</code>

<em style="color: green">
OUTPUT:
You have ordered a Large of Cola
You have ordered a Medium of Orangeade
You have ordered a Small of Lemonade
</em>

<br/>-----------------------------------<br/><br/>
The third function produced a calculator able to operate in two numbers by adding,
 supplying, multiplying, dividing or modulus.

<code style="color: blue">
const calculator = (number1, number2, operator) => {
  switch (operator) {
      case"+":
         result = number1 + number2;
         break;
      case"-":
         result = number1 - number2;
         break;
      case"*":
         result = number1 * number2;
         break;
      case"/":
         result = number1 / number2;
         break;
      case"%":
         result = number1 % number2;
         break;
  };
  return `${number1} ${operator} ${number2} = ${result}`
};

document.write(calculator(1,2, "+"));
document.write(calculator(30,2, "-"));
document.write(calculator(26,13, "*"));
document.write(calculator(30,5, "/"));
document.write(calculator(10,2, "%"));
</code>

<em style="color: green">
OUTPUT:
1 + 2 = 3
30 - 2 = 28
26 * 13 = 338
30 / 5 = 6
10 % 2 = 0
</em>
</pre>