---
layout: layouts/posts-base.njk
title: JavaScript practise - toFixed()
description: Program to calculate a tip
date: 2021-06-15
---
<pre style="margin: 5%;">
In this exercise I have practised JavaScript variables, arithmetic operations and functions. 
<br/>--------------------------------<br/><br/>
In the first example I defined variables for the pre-tip total and the tip percentage. Following that, a calculation was conducted by adding both numbers together to get the total. The value was rounded up to display only two decimals. The result is a sentence that contains the computed total. 

<code style="color: blue">
//  subTotal - The total price excluding the tip.
//  tipPercent - The percentage of the subtotal to tip.

const subTotal = 30.15 ;
const tipPercent = (subTotal/100)*5;

const total = subTotal + tipPercent;

document.write('Your total bill, with tip, is £' + total.toFixed(2));
</code>
<em style="color: green">
OUTPUT:
Your total bill, with tip, is £31.66
</em>

<br/>--------------------------------<br/><br/>
The second example is a procedural function that outputs the same result as the first.
<code style="color: blue">
function calcBill(subTotal, tipPercent) {
    const tip = subTotal * tipPercent / 100;
     const total = subTotal + tip;
     return total.toFixed(2);
}

document.write('Your total bill, with tip, is £' + calcBill(50,5));
</code>

<em style="color: green">
OUTPUT:
Your total bill, with tip, is £52.50</em>