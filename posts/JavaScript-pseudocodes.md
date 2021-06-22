---
layout: layouts/posts-base.njk
title: JavaScript + pseudocodes 
description: Functions with arrays, loops + pseudocodes
date: 2021-06-18
---
PSEUDOCODE: <br/>
<br/>
<code>

 //FOR LOOP:<br/>
/*<br/>
-Start the counter at 1<br/>
-Repeat until number 20<br/>
-Add 1 each time<br/>
<br/>
<br/>
//IF counter % 15 equals 0<br/>
  // write counter and FizzBuzz<br/>
//ELSE IF counter % 3 equals 0<br/>
  //write counter and Fizz<br/>
//ELSE IF counter % 5 equals 0<br/>
  //write counter and Buzz<br/>
// ELSE <br/>
  //write counter only<br/>
*/<br/>
<br/>
//JavaScript Code<br/>
for (let i = 1; i <= 20; i++) {<br/>
    if (i % 15 === 0 ) {<br/>
      document.write(i + " -FizzBuz")<br/>
    } else if (i % 3 === 0) {<br/>
      document.write(i + " -Fizz")<br/>
    } else if(i % 5 === 0) {<br/>
      document.write(i + " -Buzz")<br/>
    } else {<br/>
      document.write(i)<br/>
    }<br/>
  }<br/>
</code>
PSEUDOCODE: <br/>
<br/>
<code>
<br/><br/>------------------------<br/><br/>
/*<br/>
Create an array of multiple objects  <br/>
 - title: string,<br/>
 - author: string,<br/>
 - hasRead: boolean<br/>
<br/>
<br/>
 Create firstBook and secondBook variables<br/>
  - IF read IS true<br/>
    - append 'You already read' + the name and author of the book<br/>
  - ELSE read IS false<br/>
    - append 'You need to read' + the name and author of the book<br/>
  <br/>
}<br/>
*/<br/>
<br/>
//Real code:<br/>
<br/>
<br/>
const books = [{
  title: "Good vibes, good life",
  author: "Vex King",
  read: true
},{
  title: "The Vanishing Half",
  author: "Brit Bennett",
  read: false
}];


let firstBook = books[0].title + " by " + books[0].author;
let secondBook = books[1].title + " by " + books[1].author;


if (books[0].read === true) {
  document.write("You already read " + firstBook)
} else {
  document.write("You still need to read " + firstBook );
}
if (books[1].read === true) {
  document.write("You already read " + secondBook);
} else {
  document.write("You still need to read " + secondBook);
}
</code>
<br/><br/>------------------------<br/><br/>
PSEUDOCODE: 

<code>
/*
recipe objects: 
{
-title - Add a string
-servings - Add a string<br/>
-ingredients - Add an array of strings<br/>
-directions - Add an array of strings<br/>
}<br/>
<br/>
// Write recipe title<br/>
// Write recipe servings<br/>
// FOR EACH item IN ingredients <br/>
{<br/>
  //write ingredient + index + new line<br/>
}<br/>
// FOR EACH step IN directions <br/>
{<br/>
  //write directions + index + new line<br/>
}<br/>
*/<br/>
<br/>
//Real code:<br/>
<br/>
let recipe = {<br/>
  title: "Tea",<br/>
  servings: 4,<br/>
  ingredients:["Tea bag", "Water", "Milk" ],<br/>
  directions: ["Put the tea bag in a cup of water", "Leave to rest for 5 minutes", "Remove the bag and add milk"]<br/>
}<br/>
<br/>
document.write("Recipe name: " + recipe.title + "<br/>")
document.write("Servings: " + recipe.servings + "<br />")

document.write('<br /> Ingredients: <br />');
recipe.ingredients.forEach(function(ingredient, index) {
  document.write(index + 1 + ': ' + ingredient + '<br />');
});
document.write('<br /> Directions: <br />');
recipe.directions.forEach(function(direction, index) {
  document.write(index + 1 + ': ' + direction + '<br />');
});<br/>
</code>

<br/><br/>------------------------<br/><br/>
PSEUDOCODE: 

<code>
<pre>
/* 
- Define FUNCTION - one argument 
- Break the word into individual characters
- Let the first letter remain the same 

FOR (index starts at 1, add one each time) {
  IF the other letters equals first letter, transform it in "*"
}
-IF not leave it the same
*/
//Real code:<br/>
function fixStart(word) {
  
  let charArray = word.split("")
  let aux = charArray[0];
  

for (let i = 1; i < word.length; i++) {
  if (aux === charArray[i]) {
    charArray[i] = '*';
    };
};
  for (let i = 0; i < word.length; i++) {
  document.write(charArray[i] );
  
};
};

fixStart("babble");
fixStart("papirus");
fixStart("mama");
</pre>
</code>
