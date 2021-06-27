---
layout: layouts/posts-base.njk
title: JavaScript - Mode, mean, median
description: Function which returns the mode, mean and median of an array
date: 2021-06-27
---
<pre style="margin:5%;">

The mean, median, and mean of an array will be determined using if statements within a function with two parameters, the array and a type variable.


<u>Mean</u>
For the mean part of the function I will sum up all of the numbers from the array and the divide them by the total number of elements. 


<u>Median</u>
To calculate the median of an array, the code will first check the array's parity to see if there are one or two middles. 
If there is one, it will return the midpoint, which is the median; otherwise, it will display the mean of these two numbers. 

<u>Mode</u>
After sorting the array we will look for the highest number and then create a new empty array filled with zeros to assist us in calculating the frequency of each number; This array's index will represent the number, and the value within it will reflect the frequency.
Using the "for" loop once again, the highest frequency is identified, then count how often all this numbers appears and if there is more than one, an array will be returned with the numbers having the highest frequency.

<code style="color: blue">
let myGrades = [12, 57, 34, 57, 23, 87, 34, 96, 57, 34,]

function calculator(array, type) 
{
  if (type === "mean") 
  {
      let getMean = 0;
      for (let i = 0; i < array.length; i++) 
      {
        getMean += array[i] 
      }
      return getMean / array.length

} 
  if (type === "median") {
      array.sort()
      console.log(array.sort())
      let arrLen = array.length
      let median = 0
      if (arrLen % 2 !== 0) 
      {
        median = array[(arrLen - 1) / 2];
      } else 
      { 
        let median1 = arrLen / 2 
        let median2 = arrLen / 2 - 1
        median = (array[median1] + array[median2]) / 2
      }
      return median 
}

if (type === "mode") 
{
      array.sort()
      let max = 0;
      let countmax = 0;
      let biggestNumber = array[array.length - 1]
      let newEmptyArray = new Array(biggestNumber + 1);
      for (let i = 0; i < newEmptyArray.length; i++) 
      { 
        newEmptyArray[i] = 0
      };
      for (let i = 0; i < array.length; i++) 
      {
        newEmptyArray[ array[i] ]++ ; 
      };
      for (let i = 0; i < newEmptyArray.length; i++) 
      {
        if (newEmptyArray[i] > max) {
          max = newEmptyArray[i];
        }; 
      };
      for (let i = 0; i < newEmptyArray.length; i++) 
      {
        if (newEmptyArray[i] === max) {
          countmax++
          console.log(countmax)
        };
      };
      let emptyMaxArray = new Array(countmax);
      k = 0;
        for (let i = 0;i < biggestNumber; i++ ) 
        {
          if ( newEmptyArray[i] === max) {
            emptyMaxArray[k] = i;
            k++
          };
        };
      return emptyMaxArray
 }
}

document.write("Mode: " + calculator(myGrades, "mode"))
document.write("Mean: " + calculator(myGrades, "mean"))
document.write("Median: " + calculator(myGrades, "median"))
  
  </code>

<em style="color: green">
OUPUT:
Mode: 34,57
Mean: 48.5
Median: 45.5
</em>
</pre>