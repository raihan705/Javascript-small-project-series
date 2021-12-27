// select item from html page

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearbtn = document.querySelector('.clear-tasks');

// load all  the eventListner
loadEventListner();

function loadEventListner(){
    //for add a new task event

    form.addEventListener('submit', addTask);
}

//addTask function

function addTask(e){

    if (taskInput.value === '') {
        alert('you add nothing, input a value please');
    }

    // create list element

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    //create new link elemnet a in the li 

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);



    console.log(li);

    e.preventDefault();
}