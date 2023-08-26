// Selector
const input = document.querySelector('.input');
const btnInput = document.querySelector('.btn-add-todo');
const ulElementDOM = document.querySelector('.ul-element');
const btns = document.querySelectorAll('.btn');



document.addEventListener('DOMContentLoaded', displayList);
btnInput.addEventListener('click', addTodoList);
ulElementDOM.addEventListener('click', removeComplete);


function addTodoList(){
    // Create element li and add class list
    const createList = document.createElement('li');
    createList.classList.add('list');
    // Append input.value to createList
    createList.innerHTML = input.value;

    // Save to localtorage
    saveLocalStorage(input.value);
    // Create element div and add class btn-complete-delete
    const createDiv = document.createElement('div');
    createDiv.classList.add('btn-complete-delete');

    // Create element complete button and add class complete and btn
    const createBntComplete = document.createElement('button');
    createBntComplete.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    createBntComplete.classList.add('complete','btn')
    // Append createBtnComplete to createDiv
    createDiv.append(createBntComplete);

    // Create element delete button and add class delete and btn
    const createBtnDelete = document.createElement('button');
    createBtnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`
    createBtnDelete.classList.add('delete','btn')
    // Append createBtnDelete to createDiv
    createDiv.append(createBtnDelete);
    
    // Append createDiv to createList
    createList.append(createDiv);
    // Append createList to ulElementDOM
    ulElementDOM.append(createList);
    
    // Remove text after clicked the input button
    input.value = '';
}

function saveLocalStorage(todo){
    // Check if the localstorage have an key and value
    let todos;
    if(localStorage.getItem('todo') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todo'))
    }
    todos.push(todo);
    localStorage.setItem('todo', JSON.stringify(todos))
}

function displayList(){
    // Check if the localstorage have an key and value
    let todos;
    if(localStorage.getItem('todo') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todo'))
    }
    
    todos.forEach(element => {
        // Create element li and add class list
    const createList = document.createElement('li');
    createList.classList.add('list');
    // Append input.value to createList
    createList.innerHTML = element;

    // Create element div and add class btn-complete-delete
    const createDiv = document.createElement('div');
    createDiv.classList.add('btn-complete-delete');

    // Create element complete button and add class complete and btn
    const createBntComplete = document.createElement('button');
    createBntComplete.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    createBntComplete.classList.add('complete','btn','done')
    // Append createBtnComplete to createDiv
    createDiv.append(createBntComplete);

    // Create element delete button and add class delete and btn
    const createBtnDelete = document.createElement('button');
    createBtnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`
    createBtnDelete.classList.add('delete','btn')
    // Append createBtnDelete to createDiv
    createDiv.append(createBtnDelete);
    
    // Append createDiv to createList
    createList.append(createDiv);
    // Append createList to ulElementDOM
    ulElementDOM.append(createList);
    
    // Remove text after clicked the input button
    input.value = '';
    });
}

function removeComplete(e){
    let data = e.target;
    
    if(data.classList[0] === 'delete'){
        const todo = data.parentElement.parentElement;
        todo.remove();
        removeLocalTodo(todo);
    }
    if(data.classList[0] === 'complete'){
        const todo = data.parentElement.parentElement;
        todo.classList.toggle('active');
    }
}

function todoFilter(){
    
}

function removeLocalTodo(todo){
    // Check if the localstorage have an key and value
    let todos;
    if(localStorage.getItem('todo') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todo'))
    }
    const todoIndex = todo.innerText;
    todos.splice(todos.indexOf(todoIndex),1);

    localStorage.setItem('todo', JSON.stringify(todos))
}
