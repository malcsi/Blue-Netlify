---
layout: layouts/posts-base.njk
title: JavaScript - Array of objects
description: Functions using array of objects
date: 2021-06-27
---
<pre style="margin:5%;">

In this exercises, I will use a single array of objects that will serve the same purpose throughout the task. I will also use the toFixed() method to display only two decimals of the totsl price.

<code style="color: blue">
let shoppingCart = [
  { name: "Loaf of bread", type: "food", quantity: 1, price: 0.85 },
  { name: "Multipack beans", type: "food", quantity: 1, price: 1 },
  { name: "Mushrooms", type: "food", quantity: 10, price: 0.1 },
  { name: "Can of beer", type: "alcohol", quantity: 4, price: 1.1 },
  { name: "Prosecco", type: "alcohol", quantity: 1, price: 8.99 },
  { name: "Steak", type: "food", quantity: 2, price: 3.99 },
  { name: "Blue cheese", type: "food", quantity: 1, price: 2.99 },
  { name: "Candles", type: "home", quantity: 3, price: 1.99 },
  { name: "Cheesecake",type: "food", quantity: 1, price: 4.99 },
  { name: "Oions", type: "food", quantity: 3, price: 0.4 },
];
</code>

<u>Part 1</u>

In the first part I will calculate the total cost by looping through the items in the shopping cart and multiply the quantity by the price.

<code style="color: blue">
function myTotalPrice(Arr) {
  let totalPrice = 0;
  for (let i=0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price * shoppingCart[i].quantity
  } 
  return totalPrice.toFixed(2);
};

document.write("Total price: " + myTotalPrice(shoppingCart))
</code>

<em style="color: green">
OUTPUT: Total price: 39.37
</em>

<u>Part 2</u>

Now a 20% discount will be applied on the food items.

<code style="color: blue">
function totalWithFoodDiscount(Array) {
  let totalPrice = 0;
  for (let j = 0; j < shoppingCart.length; j++) {
    const discountAmount = shoppingCart[j].price * 20/100
    if (shoppingCart[j].type === "food") {
      shoppingCart[j].price -= discountAmount
    }
    totalPrice += shoppingCart[j].price * shoppingCart[j].quantity;
  }
  return totalPrice.toFixed(2);
}

document.write("Total price, with discount on food: " + totalWithFoodDiscount(shoppingCart))
</code>

<em style="color: green">
OUTPUT: Total price, with discount on food: 35.37
</em>

<u>Part 3</u>

For the third exercise we can calculate the discount amount for every type of item. 

<code style="color: blue">
function totalWithDiscount(Array, discount, type) {
  let totalPrice = 0;
  for (let j = 0; j < shoppingCart.length; j++) {
    let discountAmount = shoppingCart[j].price * discount/100
    if (type ==="any" || type === shoppingCart.type)
      shoppingCart[j].price -= discountAmount
    
    totalPrice += shoppingCart[j].price * shoppingCart[j].quantity;
  }
  return totalPrice.toFixed(2);
}

document.write("Total price, with discount: " + totalWithDiscount(shoppingCart, 20, "any"))
</code>

<em style="color: green">
OUTPUT: Total price, with discount: 28.29
</em>

<u>Part 4</u>
With this method we can find products having a price between a specified lowPrice and highPrice, which will be 2 and 5 in this example. The parameters I'll use are "cart," "lowPrice," "highPrice," and "quantity." The name, price, and quantity will all be shown.

<code style="color: blue">
function part5(cart, lowPrice, highPrice, quantity) {
  
  let arrItems = new Array();
  for ( let i = 0; i < cart.length; i++) {
   
    if ((cart[i].price >= lowPrice) && (cart[i].price <= highPrice) && Boolean(quantity)) {
      arrItems.push(`<br/> ${cart[i].name}: ${cart[i].price} <br/> Quantity: ${cart[i].quantity} <br/>`)
    }
   
  } return arrItems
}
document.write(part5(shoppingCart, 2, 5, true))
</code>

<em style="color: green">
OUTPUT:
Steak: 3.99
Quantity: 2
,
Blue cheese: 2.99
Quantity: 1
,
Cheesecake: 4.99
Quantity: 1
</em>
</pre>

