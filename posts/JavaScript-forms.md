---
layout: layouts/javascript-forms.njk
title: JavaScript - To do list
description: In this exercise I created a basic "To do app", where the user can add a task in the list or delete it when needed.
date: 2021-06-29
---
<pre style="margin:5%;">


<code style="color: blue">
const priorityImages = {
	low: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-green.png',
	medium: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-yellow.png',
	high: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-red.png',
};

const form = document.getElementById("todo");
const todoPane = document.getElementById("todo-pane");
const titleInput = document.querySelector("#title");
const prioritySelect = document.querySelector("#priority");
const allTodos = document.getElementsByClassName("todo");

form.addEventListener('submit', function(event) {
  for (const todo of allTodos) {
    todo.classList.add('just-created');
  }
  todoPane.appendChild(createTodo(titleInput.value, prioritySelect.value))
	titleInput.value = '';
	event.preventDefault();
});


function createTodo(title,priority) {
	const text = document.createTextNode(title);
    const list = document.createElement("li");
    const image = document.createElement('img');
    image.src = priorityImages[priority];
    list.appendChild(image);
	list.appendChild(text);
  
    list.addEventListener("dblclick", function(event) {
        event.currentTarget.remove();
    });
	return list;
};
</code>
</pre>

