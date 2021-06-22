---
layout: layouts/posts-base.njk
title: JavaScript + pseudocodes 
description: Functions with arrays, loops + pseudocodes
date: 2021-06-18
---

<pre style="margin: 5%;">
<code>
PSEUDOCODE: 

 //FOR LOOP:
/*
-Start the counter at 1
-Repeat until number 20
-Add 1 each time


//IF counter % 15 equals 0
  // write counter and FizzBuzz
//ELSE IF counter % 3 equals 0
  //write counter and Fizz
//ELSE IF counter % 5 equals 0
  //write counter and Buzz
// ELSE 
  //write counter only
*/

//JavaScript Code
for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0 ) {
      document.write(i + " -FizzBuz <br/> ")
    } else if (i % 3 === 0) {
      document.write(i + " -Fizz")
    } else if(i % 5 === 0) {
      document.write(i + " -Buzz")
    } else {
      document.write(i)
    }
  }
</code>
PSEUDOCODE: 

<code>
<br/><br/>------------------------<br/><br/>
/*
Create an array of multiple objects  
 - title: string,
 - author: string,
 - hasRead: boolean



 Create firstBook and secondBook variables
  - IF read IS true
    - append 'You already read' + the name and author of the book
  - ELSE read IS false
    - append 'You need to read' + the name and author of the book
  
}
*/
<br/>
//Real code:


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
-servings - Add a string
-ingredients - Add an array of strings
-directions - Add an array of strings
}

// Write recipe title
// Write recipe servings
// FOR EACH item IN ingredients 
{
  //write ingredient + index + new line
}
// FOR EACH step IN directions 
{
  //write directions + index + new line
}
*/



let recipe = {
  title: "Tea",
  servings: 4,
  ingredients:["Tea bag", "Water", "Milk" ],
  directions: ["Put the tea bag in a cup of water", "Leave to rest for 5 minutes", "Remove the bag and add milk"]
}

document.write("Recipe name: " + recipe.title + "<br/>")
document.write("Servings: " + recipe.servings + "<br />")

document.write('<br /> Ingredients: <br />');
recipe.ingredients.forEach(function(ingredient, index) {
  document.write(index + 1 + ': ' + ingredient + '<br />');
});
document.write('<br /> Directions: <br />');
recipe.directions.forEach(function(direction, index) {
  document.write(index + 1 + ': ' + direction + '<br />');
});
</code>

<br/><br/>------------------------<br/><br/>
PSEUDOCODE: 

<code>

/* 
-Define FUNCTION - one argument 
-Break the word into individual characters
-Let the first letter remain the same 

FOR (index starts at 1, add one each time) {
  IF the other letters equals first letter, transform it in "*"
}
-IF not leave it the same
*/

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

</code>
</pre>