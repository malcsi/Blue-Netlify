---
layout: layouts/posts-base.njk
title: JavaScript - Array of objects
description: Functions using array of objects
date: 2021-06-27
---
<pre style="margin:5%;">

In this exercise I created a basic "To do app", where the user can add a task in the list or delete it when needed.


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

<div class="container">
  <h1>TO DO LIST</h1>
  <p>By double-clicking on the item, you can remove it.</p>
  <form id="todo">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" required>
    <label for="priority">Priority</label>
    <select name="priority" id="priority">
      <option value="low">Low</option>
      <option value="medium" selected>Medium</option>
      <option value="high">High</option>
    </select>
    <button>Add</button>
    
  </form>
  <ul id="todo-pane"></ul>
    <small>
      Flag images used with thanks from <a href="https://www.iconfinder.com/iconsets/prettyoffice8">https://www.iconfinder.com/iconsets/prettyoffice8</a>.
    </small>
</div>
<script>
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
</script>
