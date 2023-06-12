// Store some references to my elements
var inputEl = document.querySelector('#todo-input');
var addBtn = document.querySelector('#add-btn');
var output = document.querySelector('#todo-output');


// Create a function that gets the todos from localStorage
function getTodos() {
  // Retrieve the array/null of todos from localStorage
  var todos = localStorage.getItem('todos');
  // Parse the JSON string
  var parsed = JSON.parse(todos);

  // return the parsed value
  return parsed || [];
}

// Create a function that stores a new todo to the todos in localStorage
function addTodo() {
  // Get old todos array
  var todos = getTodos();
  // Get the text that was inputted
  var todoText = inputEl.value;
  // Push the text to the old array
  todos.push(todoText);
  // Replace the old array in localStorage with the new array
  localStorage.setItem('todos', JSON.stringify(todos));

  // Show the newly updated todos in the DOM
  showTodos();
}

// Create a function that shows the todos on the page
function showTodos() {
  // Retrieve the todos
  var todos = getTodos();

  // Clear the ul
  output.innerHTML = '';

  // If the array is empty, output a paragraph that says "No todos have been added."
  if (todos.length === 0) {
    var p = document.createElement('p');
    p.innerText = 'No todos have been added.';

    output.append(p);
  }

  // Loop over the array of todos and output an li into the ul for each todo
  for (var i = 0; i < todos.length; i++) {
    var todoStr = todos[i];

    // Create an li element
    var li = document.createElement('li');

    // Set the li's innerText to the todoStr
    li.innerText = todoStr;

    // Output the li to the ul at the top inside
    output.prepend(li);
  }
}

// Initial tasks or processes

// Show all todos that have been stored
showTodos();

// Add event listener to our Add Todo button
addBtn.addEventListener('click', addTodo);