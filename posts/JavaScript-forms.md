---
layout: layouts/javascript-forms.njk
title: JavaScript - To do list
description: The purpose of this exercise was to build a "To do" app, which allows users to add a task, as well as its priority.
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

