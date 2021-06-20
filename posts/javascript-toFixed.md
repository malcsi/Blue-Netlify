---
layout: layouts/post.njk
title: JavaScript practise - toFixed()
description: Calculates the total bill from the subtotal and tip percentage.
date: 2021-06-15
---
<br/>
In this exercise I have practised JavaScript variables, arithmetic operations and functions. 
<br/>--------------------------------<br/><br/>
In the first example I defined variables for the pre-tip total and the tip percentage. Following that, a calculation was conducted by adding both numbers together to get the total. The value was rounded up to display only two decimals. The result is a sentence that contains the computed total. 
<br/><br/>
<code>
//  subTotal - The total price excluding the tip.<br/>
//  tipPercent - The percentage of the subtotal to tip.<br/>
<br/>
const subTotal = 30.15 ;<br/>
const tipPercent = (subTotal/100)*5;<br/>
<br/>
const total = subTotal + tipPercent;<br/>
<br/>
document.write('Your total bill, with tip, is £' + total.toFixed(2));<br/>
</code>
<em>
OUTPUT:<br/>
Your total bill, with tip, is £31.66<br/></em>

<br/>--------------------------------<br/><br/>
The second example is a procedural function that outputs the same result as the first.<br/><br/>
<code>
function calcBill(subTotal, tipPercent) {<br/>
    const tip = subTotal * tipPercent / 100;<br/>
     const total = subTotal + tip;<br/>
     return total.toFixed(2);<br/>
}<br/>
<br/>
document.write('Your total bill, with tip, is £' + calcBill(50,5));</code>
<br/>
<em>
OUTPUT: <br/>
Your total bill, with tip, is £52.50<br/></em>